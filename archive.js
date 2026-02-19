// ==========================================
// 1. DATA CONFIGURATION
// ==========================================
const folderConfigs = {
    "Resources": [
        { type: 'image', url: './res/vault_window.png', label: 'Vault UI' }
    ],
    "3D": [],
    "Fonts": [],
    "Greenscreen": [],
    "Overlays": [],
    "Textures": [],
    "SFX": [],
    "Music": []
};




// ==========================================
// 2. TASKBAR & SYSTEM LOGIC (The "Missing" Parts)
// ==========================================

// Update the clock every second
function updateTaskbarTime() {
    const timeDisplay = document.getElementById('taskbar-time');
    if (!timeDisplay) return;

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    timeDisplay.innerText = `${hours}:${minutes}`;
}

// Toggle Start Menu visibility
function toggleStartMenu() {
    const menu = document.getElementById('start-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Close Start Menu if clicking anywhere else on the desktop
document.addEventListener('click', (e) => {
    const menu = document.getElementById('start-menu');
    const startBtn = document.querySelector('button[onclick="toggleStartMenu()"]');
    
    if (menu && !menu.contains(e.target) && !startBtn.contains(e.target)) {
        menu.classList.add('hidden');
    }
});

// ==========================================
// 3. WINDOW & FOLDER LOGIC
// ==========================================

function openDynamicWindow(folderName) {
    const data = folderConfigs[folderName];
    const template = document.getElementById('window-template');
    const desktop = document.getElementById('desktop');

    if (!data || !template) return;

    const win = template.cloneNode(true);
    const cleanId = folderName.replace(/\s+/g, '-').toLowerCase();
    win.id = `win-dynamic-${cleanId}`;
    win.classList.remove('hidden');

    const offset = Math.floor(Math.random() * 40);
    win.style.top = (120 + offset) + "px";
    win.style.left = (320 + offset) + "px";
    win.style.zIndex = "50";

    win.querySelector('.window-title').innerText = `C:\\ARCHIVE\\${folderName.toUpperCase()}`;

    const downloadBtn = win.querySelector('.download-all-btn');
    if (downloadBtn) {
        downloadBtn.onclick = (e) => {
            e.stopPropagation();
            alert(`BULK DOWNLOAD: ${folderName}\nFiles: ${data.length}\nStatus: Pending Backend Link.`);
        };
    }

    const closeBtn = win.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.onclick = () => win.remove();
    }

    const contentContainer = win.querySelector('.window-content');
    contentContainer.innerHTML = ''; 

    if (data.length === 0) {
        contentContainer.innerHTML = `<div class="text-center text-purple-900/50 text-[10px] py-10 italic">[ FOLDER_EMPTY ]</div>`;
    } else {
        data.forEach(item => {
            let itemHtml = '';
            if (item.type === 'video') {
                itemHtml = `
                    <div class="flex flex-col gap-2 mb-4 group/item">
                        <div class="aspect-video border-2 border-purple-900/50 bg-black overflow-hidden relative">
                            <iframe class="w-full h-full opacity-80 group-hover/item:opacity-100" src="${item.url}" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-[9px] text-purple-400 font-bold uppercase tracking-widest">> ${item.label}</span>
                            <a href="${item.url}" target="_blank" class="text-[8px] bg-purple-900/30 px-2 py-0.5 border border-purple-500/50 hover:bg-purple-500 hover:text-white transition-all">OPEN</a>
                        </div>
                    </div>`;
            } else {
                itemHtml = `
                    <div class="flex flex-col gap-2 mb-4 group/item">
                        <div class="border-2 border-purple-900/50 bg-purple-900/10 p-1">
                            <img src="${item.url}" class="w-full opacity-70 group-hover/item:opacity-100 transition-all" alt="${item.label}">
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-[9px] text-purple-400 font-bold uppercase tracking-widest">> ${item.label}</span>
                            <a href="${item.url}" download="${item.label}" class="text-[8px] bg-purple-900/30 px-2 py-0.5 border border-purple-500/50 hover:bg-purple-500 hover:text-white transition-all">DOWNLOAD</a>
                        </div>
                    </div>`;
            }
            contentContainer.innerHTML += itemHtml;
        });
    }

    desktop.appendChild(win);
    
    win.onmousedown = () => {
        document.querySelectorAll('.window').forEach(w => w.style.zIndex = "10");
        win.style.zIndex = "50";
    };

    initDrag(win);
}

function initDrag(el) {
    const header = el.querySelector('.window-header');
    if (!header) return;

    header.onmousedown = function(e) {
        if (e.target.closest('button')) return;

        let shiftX = e.clientX - el.getBoundingClientRect().left;
        let shiftY = e.clientY - el.getBoundingClientRect().top;

        el.style.position = 'absolute';
        document.body.append(el);

        function moveAt(pageX, pageY) {
            el.style.left = pageX - shiftX + 'px';
            el.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        document.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;
        };
    };

    header.ondragstart = function() { return false; };
}

function openWindow(id) {
    const win = document.getElementById(id);
    if (win) {
        win.classList.remove('hidden');
        win.style.zIndex = "60";
        initDrag(win);
    }
}

function closeWindow(id) {
    const win = document.getElementById(id);
    if (win) win.classList.add('hidden');
}

// ==========================================
// 4. MUSIC PLAYER LOGIC
// ==========================================

const LASTFM_API_KEY = '81420bab034b2a26079e66fbbaaac1c3'; 
const LASTFM_USERNAME = 'ChiquitaChi'; 

const player = document.getElementById('music-player');
const trackName = document.getElementById('track-name');
const artistName = document.getElementById('artist-name');
const trackArt = document.getElementById('track-art');
const statusText = document.getElementById('status-text');
const visualizer = document.getElementById('visualizer');

function initVisualizer() {
    visualizer.innerHTML = '';
    for(let i=0; i<30; i++) {
        const bar = document.createElement('div');
        bar.className = 'viz-bar';
        bar.style.width = '100%';
        bar.style.background = '#DF2D63';
        bar.style.animation = 'equalizer 0.5s ease-in-out infinite';
        bar.style.boxShadow = '0 0 5px #DF2D63';
        bar.style.animationDuration = (Math.random() * 0.4 + 0.2) + 's'; 
        if(i % 2 === 0) {
            bar.style.background = '#A221A2';
            bar.style.boxShadow = '0 0 5px #A221A2';
        }
        visualizer.appendChild(bar);
    }
}

function getRelativeTime(uts) {
    const now = Math.floor(Date.now() / 1000);
    const diff = now - uts;
    if (diff < 60) return "JUST NOW";
    if (diff < 3600) return `${Math.floor(diff / 60)}M AGO`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}H AGO`;
    return `${Math.floor(diff / 86400)}D AGO`;
}

async function fetchMusicData() {
    // 1. Force the player to show immediately
    player.classList.remove('hidden');

    try {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`);
        const data = await response.json();
        
        // Handle empty data (user has never listened to music)
        if (!data.recenttracks || !data.recenttracks.track || data.recenttracks.track.length === 0) {
            statusText.innerText = "NO DATA FOUND";
            return;
        }
        
        const track = data.recenttracks.track[0];
        const trackLink = document.getElementById('track-link');

        trackLink.href = track.url;
        const isPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';

        trackName.innerText = track.name.toUpperCase();
        artistName.innerText = track.artist['#text'].toUpperCase();
        
        const artUrl = track.image[2]['#text'];
        trackArt.src = artUrl || './res/disc_icon.png';

        if (isPlaying) {
            statusText.innerHTML = `<span class="text-green-400 animate-pulse">>> NOW PLAYING <<</span>`;
            visualizer.style.opacity = "1";
            // Make bars dance
            Array.from(visualizer.children).forEach(bar => bar.style.animationPlayState = 'running');
        } else {
            const timeAgo = track.date ? getRelativeTime(track.date.uts) : "JUST NOW";
            statusText.innerText = `[PAUSED] - ${timeAgo}`;
            statusText.classList.remove('text-green-400');
            visualizer.style.opacity = "0.2";
            // Freeze bars
            Array.from(visualizer.children).forEach(bar => {
                bar.style.animationPlayState = 'paused';
                bar.style.height = '10%'; 
            });
        }
    } catch (error) {
        console.error("Music Fetch Error:", error);
        // Even if it fails, we keep the player visible but show an error
        statusText.innerText = "SIGNAL LOST (API ERROR)";
    }
}

// ==========================================
// 5. INITIALIZATION
// ==========================================

// Start Music
initVisualizer();
fetchMusicData();
setInterval(fetchMusicData, 10000);

// Start Clock
updateTaskbarTime();
setInterval(updateTaskbarTime, 1000);

const notepad = document.getElementById('win-notepad');
if (notepad) {
    initDrag(notepad);
    
    // Focus the notepad on load so you can type immediately
    notepad.querySelector('textarea').focus();

    // Click to bring to front logic
    notepad.onmousedown = () => {
        document.querySelectorAll('.window').forEach(w => w.style.zIndex = "10");
        notepad.style.zIndex = "50";
    };
}

const showcaseWin = document.getElementById('win-image-showcase');
if (showcaseWin) {
    initDrag(showcaseWin);
    
    // Click to bring to front
    showcaseWin.onmousedown = () => {
        document.querySelectorAll('.window').forEach(w => w.style.zIndex = "10");
        showcaseWin.style.zIndex = "50";
    };
}

if (player) {
    // Enable dragging
    initDrag(player);
    
    // Bring to front on click
    player.onmousedown = () => {
        document.querySelectorAll('.window, #music-player').forEach(w => w.style.zIndex = "10");
        player.style.zIndex = "100";
    };
}

/**
 * Opens a retro download prompt for project files
 * @param {string} name - Name of the project
 * @param {string} thumb - Path to the image thumbnail
 * @param {string} fileName - The actual file to be downloaded
 */
function openDownloadPrompt(name, thumb, fileName) {
    const prompt = document.getElementById('download-prompt');
    const promptName = document.getElementById('prompt-name');
    const promptThumb = document.querySelector('#prompt-thumb img');
    const confirmBtn = document.getElementById('confirm-download');

    // Update the content of the prompt
    promptName.innerText = name.toUpperCase();
    promptThumb.src = thumb;
    
    // Set up the download trigger
    confirmBtn.onclick = () => {
        triggerProjectDownload(fileName);
        closeWindow('download-prompt');
    };

    // Show the window
    prompt.classList.remove('hidden');
    
    // Ensure it's on top of everything
    document.querySelectorAll('.window').forEach(w => w.style.zIndex = "10");
    prompt.style.zIndex = "200";

    // Initialize dragging for the new window
    initDrag(prompt);
}

/**
 * Handles the actual download logic
 * On the frontend, we create a temporary anchor element.
 */
function triggerProjectDownload(fileName) {
    // This is the "Backend" path. Replace with your actual server URL if needed.
    const fileUrl = `./files/${fileName}`; 

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName; // This triggers the download attribute
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log(`System: Downloading ${fileName} from secure archive...`);
}


// ==========================================
// 6. CONTACT / EMAIL UPLINK LOGIC
// ==========================================

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

async function transmitEmail() {
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    const modal = document.getElementById('upload-modal');
    const progressBar = document.getElementById('modal-progress-bar');
    const statusText = document.getElementById('modal-status-text');

    // Check if fields are empty
    if (!email || !message) {
        alert("CRITICAL_ERROR: FIELDS_EMPTY");
        return;
    }

    // NEW: Check if email format is valid
    if (!validateEmail(email)) {
        alert("CRITICAL_ERROR: INVALID_EMAIL_FORMAT\nEnsure address contains '@' and a valid domain.");
        document.getElementById('contact-email').focus();
        return;
    }

    modal.classList.remove('hidden');
    progressBar.style.width = '10%';
    statusText.innerText = "PACKET_HANDSHAKE...";

    try {
        await new Promise(r => setTimeout(r, 800));
        progressBar.style.width = '45%';
        statusText.innerText = "TRANSMITTING_JSON...";

        const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        const API_BASE_URL = isLocal ? 'http://localhost:3000' : 'https://niq-os.onrender.com';

        const response = await fetch(`${API_BASE_URL}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, message })
        });

        if (response.ok) {
            progressBar.style.width = '100%';
            statusText.innerText = "SUCCESS: DATA_RELAY_CONFIRMED";
            
            await new Promise(r => setTimeout(r, 2000));
            
            modal.classList.add('hidden');
            closeWindow('win-contact');
            
            document.getElementById('contact-email').value = "";
            document.getElementById('contact-message').value = "";
        } else {
            const errorData = await response.json();
            statusText.innerText = `ERROR: ${errorData.error || 'UPLINK_REJECTED'}`;
            setTimeout(() => modal.classList.add('hidden'), 3000);
        }
    } catch (error) {
        statusText.innerText = "CRITICAL_FAILURE: SERVER_OFFLINE";
        setTimeout(() => modal.classList.add('hidden'), 4000);
    }
}

/*function updateFileName(input) {
    const status = document.getElementById('file-status');
    const MAX_SIZE = 10 * 1024 * 1024; // 10MB in bytes

    if (input.files && input.files[0]) {
        const file = input.files[0];
        
        if (file.size > MAX_SIZE) {
            status.innerText = "ERROR: FILE_TOO_LARGE (MAX 10MB)";
            status.classList.remove('text-purple-500');
            status.classList.add('text-red-500');
            input.value = ""; // Clear the file
            return;
        }

        const name = file.name;
        const displayName = name.length > 20 ? name.substring(0, 17) + "..." : name;
        status.innerText = `SELECTED: ${displayName}`;
        status.classList.remove('text-purple-500', 'text-red-500');
        status.classList.add('text-green-400');
    }
}*/

// ==========================================
// 7. SYSTEM BOOT / BUFFER CLEAR
// ==========================================

window.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file-upload');
    const fileStatus = document.getElementById('file-status');

    if (fileInput) {
        // Clear the actual file data
        fileInput.value = ''; 
    }

    if (fileStatus) {
        // Reset the UI label to its default state
        fileStatus.innerText = "UPLOAD";
        fileStatus.className = "text-[10px] text-purple-500";
    }

    console.log("SYSTEM: Temporary buffers cleared. Ready for input.");
});