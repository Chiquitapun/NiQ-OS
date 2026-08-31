const VAULT_URL = "https://vault.chipun.com";
const API_BASE_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:3000'
    : 'https://niq-os.onrender.com';
const MEDIA_PROXY_URL = "https://b2-niqos-proxy.kwdn6505.workers.dev";

const folderConfigs = {

    "Photography": [
        { 
            type: 'video', 
            url: 'https://b2-niqos-proxy.kwdn6505.workers.dev/Outro.mp4', 
            label: 'Outro.mp4' 
        },
    ],

    "Edits": [
        { 
            type: 'video', 
            url: 'https://youtu.be/Rtp7fnad548?si=0Lwa--3SiDy61o_R', 
            label: 'Wowaka - Unknown Mother Goose' 
        },
        { 
            type: 'video', 
            url: 'https://b2-niqos-proxy.kwdn6505.workers.dev/Own+Works/Clips/Cant_Leave_Persona_4/love.mp4', 
            label: 'Love.mp4 (From <a href="https://youtu.be/X7fcDolRbWE?si=IMZtE6J2e1rM0rJP" target="_blank">Why you cant leave Persona 4</a>)' 
        },
        { 
            type: 'video', 
            url: 'https://b2-niqos-proxy.kwdn6505.workers.dev/Own+Works/Clips/Cant_Leave_Persona_4/welcome+to+inaba.mp4', 
            label: 'Welcome to Inaba.mp4 (From <a href="https://youtu.be/X7fcDolRbWE?si=IMZtE6J2e1rM0rJP" target="_blank">Why you cant leave Persona 4</a>)' 
        },
        { 
            type: 'video', 
            url: 'https://b2-niqos-proxy.kwdn6505.workers.dev/Own+Works/Clips/Cant_Leave_Persona_4/load+again.mp4', 
            label: 'Load Again.mp4 (From <a href="https://youtu.be/X7fcDolRbWE?si=IMZtE6J2e1rM0rJP" target="_blank">Why you cant leave Persona 4</a>)' 
        },
        { 
            type: 'video', 
            url: 'https://b2-niqos-proxy.kwdn6505.workers.dev/Own+Works/Clips/Cant_Leave_Persona_4/killer.mp4', 
            label: 'Killer.mp4 (From <a href="https://youtu.be/X7fcDolRbWE?si=IMZtE6J2e1rM0rJP" target="_blank">Why you cant leave Persona 4</a>)' 
        },
        { 
            type: 'video', 
            url: 'https://b2-niqos-proxy.kwdn6505.workers.dev/Own+Works/Clips/The_Unstoppable_Rise_of_Miku/hey hey miku.mp4', 
            label: 'Hey Hey Miku.mp4 (From <a href="https://youtu.be/-CC73f_HTw0?si=mAFqiMJdR8HTWNwV" target="_blank">The Unstoppable Rise of Miku</a>)' 
        },
        { 
            type: 'video', 
            url: 'https://b2-niqos-proxy.kwdn6505.workers.dev/Own+Works/Clips/The_Unstoppable_Rise_of_Miku/pigtailsgohere.mp4', 
            label: 'pigtailsgohere.mp4 (From <a href="https://youtu.be/-CC73f_HTw0?si=mAFqiMJdR8HTWNwV" target="_blank">The Unstoppable Rise of Miku</a>)' 
        },
        { 
            type: 'video', 
            url: 'https://b2-niqos-proxy.kwdn6505.workers.dev/Own+Works/Clips/The_Unstoppable_Rise_of_Miku/world+is+hers.mp4', 
            label: 'world is hers.mp4 (From <a href="https://youtu.be/-CC73f_HTw0?si=mAFqiMJdR8HTWNwV" target="_blank">The Unstoppable Rise of Miku</a>)' 
        },
        { 
            type: 'video', 
            url: 'https://b2-niqos-proxy.kwdn6505.workers.dev/Own+Works/Clips/thebestestofboys/gba_games.mp4', 
            label: 'gba_games.mp4 (From <a href="https://youtu.be/skLmiRw9wNY" target="_blank">The bestest of BOYS - The Game Boy Advance SP</a>)' 
        },
        { 
            type: 'video', 
            url: 'https://youtu.be/CD4lEaF2BoU?si=0GZ0qYw00ujnmMfY', 
            label: 'NiQ x Arizona (Someday I will get that Sponsor man)' 
        },
        { 
            type: 'image', 
            url: 'https://b2-niqos-proxy.kwdn6505.workers.dev/Own+Works/Drawings/miku+fall+compressed.gif', 
            label: 'Miku Fall.gif' 
        },
    ],

    "Drawings": [
        { 
            type: 'image', 
            url: 'https://b2-niqos-proxy.kwdn6505.workers.dev/Own+Works/Drawings/wowaka+moon+miku+gif+ver+2.gif', 
            label: 'Miku Wowaka Moon.gif' 
        },
        { 
            type: 'image', 
            url: 'https://b2-niqos-proxy.kwdn6505.workers.dev/Own+Works/Drawings/mikufallcloseup-ezgif.com-video-to-gif-converter.gif', 
            label: 'Miku Fall Closeup.gif' 
        },
        { 
            type: 'image', 
            url: 'https://b2-niqos-proxy.kwdn6505.workers.dev/Own+Works/Drawings/miku+fall+v2.jpg', 
            label: 'Miku Fall.jpg' 
        },
        { 
            type: 'image', 
            url: 'https://f003.backblazeb2.com/file/NiQ-Archive/Own+Works/Drawings/Rise+P4+Jeans.jpeg', 
            label: 'Rise P4 Jeans.jpeg (24.05.22) reference:https://www.zerochan.net/3513124' 
        },
        { 
            type: 'image',
            url: 'https://f003.backblazeb2.com/file/NiQ-Archive/Own+Works/Drawings/Nobara+Sketch.jpeg', 
            label: 'Nobara Sketch.jpeg (31.01.22)' 
        },
        { 
            type: 'image', 
            url: 'https://f003.backblazeb2.com/file/NiQ-Archive/Own+Works/Drawings/Rise+P4+Watermelon.jpeg', 
            label: 'Rise P4 Watermelon.jpeg (25.05.22)' 
        },
        { 
            type: 'image', 
            url: 'https://f003.backblazeb2.com/file/NiQ-Archive/Own+Works/Drawings/Zero+Drakengard.jpeg', 
            label: 'Zero Drakengard.jpeg (03.01.22)' 
        },
        { 
            type: 'image',
            url: 'https://f003.backblazeb2.com/file/NiQ-Archive/Own+Works/Drawings/Girl+with+glasses.jpeg', 
            label: 'Can\'t find the reference anymore (31.10.21)'
        },
    ],


    //RESOURCES

    "Resources": {
        note: 'Backgrounds used often (Some are heavily edited from some og source)',
        items:[ 
            {
            type: 'image', 
            url: 'https://f003.backblazeb2.com/file/NiQ-Archive/%5B01%5D+Resources/Background/vault+bg.gif', 
            label: 'NiQ_BG.gif (Originally from City the Animation)'
            },
            {
            type: 'video', 
            url: 'https://f003.backblazeb2.com/file/NiQ-Archive/%5B01%5D+Resources/Background/lue+Sky.mp4', 
            label: 'lue sky.mp4'
            },
        ]
    },
    "3D": {
        note:'3D Models and Assets used and free to use (mostly on Sketchfab). Also some 3D Models/Scenes I commissioned are or will be here too.',
        items:[
            {
                type: 'link',
                url: 'https://models.spriters-resource.com/',
                label: 'Spriters Resource 3D Models',
                description: 'Website I use a fuck ton, pretty much all the 3D Models of Characters are here. I very often use them and rig them through the rigify addon in Blender -> paste Mixamo Animations or poses onto them.'
            },
            {
                type: 'link',
                url: 'https://sketchfab.com/3d-models/old-computer-mouse-and-keyboard-low-poly-a41e98d3650e4d8ba544b6a589f3f4f3',
                label: 'old_computer_low_poly',
            },
        ]
    },
    "Fonts": {
        note:'Filling soon... uhm yeah',
        items:[]
    },
    "PNG/SVG": {
        items: [
            {
                type: 'link',
                url: 'https://www.spriters-resource.com/',
                label: 'Spriters Resource',
                description: 'Self explanatory, I use this site a lot for PNGs and Spritesheets'
            },
            {
                type: 'link',
                url: 'https://drive.google.com/drive/folders/1XVbJ-0DzkKAtlZFlhHuedwTrQaogs5o4', 
                label: 'Some Frame pngs (Google Drive)',
                description: 'Its a Pack from <a href="https://www.youtube.com/@tppoart" target="_blank">tppo</a> Here is the Link of his <a href="https://youtu.be/-QpcCGwUicA?si=iTg4lJbU7fE7vDvK" target="_blank">Video</a>',
                author:{
                    name: 'tppo',
                    url: 'https://www.youtube.com/@tppoart'
                }
            },

            ]
        },

    "Overlays": {
    note: 'yup',
    items: []
    },
    "Textures": {
        note:'Textures that are mostly from some Video Editing or Graphic Design Discords that were shared and are free to use (I think at least) some of them are hella big jpgs for some reason, so the preview loads slow... (Textures not in 3D Textures but Overlay Texturing)',
        items: [
            { 
                type: 'image', 
                url: 'https://f003.backblazeb2.com/file/NiQ-Archive/%5B01%5D+Resources/Textures/Grain/Grain+6.jpg', 
                label: 'Grain6.jpeg'
            },
            { 
                type: 'image', 
                url: 'https://f003.backblazeb2.com/file/NiQ-Archive/%5B01%5D+Resources/Textures/Halftone/Halftone+1.png', 
                label: 'Halftone1.jpeg'
            },
            { 
                type: 'image', 
                url: 'https://f003.backblazeb2.com/file/NiQ-Archive/%5B01%5D+Resources/Textures/Halftone/Halftone+10.png', 
                label: 'Halftone10.jpeg'
            },
            { 
                type: 'image', 
                url: 'https://f003.backblazeb2.com/file/NiQ-Archive/%5B01%5D+Resources/Textures/Halftone/Halftone+13.png', 
                label: 'Halftone13.jpeg'
            },
        ]
    },
    "SFX": {
        note: "SFX I use pretty often",
        items: [
            {   
                type: 'link',
                url: 'https://sounds.spriters-resource.com/',
                label: 'Spriters Resource sounds',
                description: 'Probably almost all the SFX of Videogames are here'
            },
            { 
            type: 'video', 
            url: 'https://youtu.be/5UHmxWsPNzg?si=TYHaZWYefhZ7TG60', 
            label: 'Pokemon Emerald' 
            },
            { 
            type: 'video', 
            url: 'https://youtu.be/wi4R26anBB8?si=oeoDqKwyGKWeh3tP', 
            label: 'Pokemon Emerald' 
            },
            { 
            type: 'video', 
            url: 'https://youtu.be/nd1JgyIpywg?si=VxZKUir67jc0jhEj', 
            label: 'Needy Streamer Overload' 
            },
            { 
            type: 'video', 
            url: 'https://youtu.be/Try6sethbk0?si=k3BRT0u8EjKS27b0', 
            label: 'Final Fantasy VII' 
            },
            { 
            type: 'video', 
            url: 'https://youtu.be/3421TdPOpjM?si=qIi9ozHd4KxqWLhm', 
            label: 'Final Fantasy XIII - Menu Sounds' 
            },
            { 
            type: 'video', 
            url: 'https://youtu.be/yr8rlcXjm3E?si=0OJzghggh58qvuYJ', 
            label: 'Persona 4 - Menu Sounds' 
            },
            { 
            type: 'video', 
            url: 'https://youtu.be/kc4WYXwDgV4?si=FrTHAMv8Se-zpEog', 
            label: 'Omori - Talking Sound' 
            },
            { 
            type: 'video', 
            url: 'https://youtu.be/_a6eDuCSbBU?si=AWEfVNJV4NK1PYh0', 
            label: 'Killer7 - Random Sounds' 
            },
            { 
            type: 'link', 
            url: 'https://sounds.spriters-resource.com/gamecube/killer7/asset/446146/', 
            label: 'Killer7 - TV SFX (Spriters Resource)' 
            },
    ]
},
    "Music": {
        note: "Music I like to use (most of them are Videogame OST and are not being claimed) the first entry iss the YT Playlist",
        items: [
        {type: 'video', url:'https://www.youtube.com/playlist?list=PLWwyP2x4ld_I4ov7AvLIlzOZl272LJyyJ', label: 'used_music_in_videos -> WHOLE Playlist' },
        { 
        type: 'video', 
        url: 'https://youtu.be/7tEelG9FjXM?si=0PkiZhXi1NyBVK2K', 
        label: 'Pokemon Emerald' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/QGHjp1qHI8g?si=W8GAtQDf_M5vrRdj', 
        label: 'Midicronica' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/dKZ7vVIbK7s?si=gQKSZ8KoGtjAPbJz', 
        label: 'FFX' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/sQyaI6LXh6k?si=Ia2w7Z9cuB_sediv', 
        label: 'Mind Game' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/mVRY87v6DLM?si=nM8AWmZXT89IY2F0', 
        label: 'Tekken 4' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/FWMe6S2CEpc?si=tlSQPDnmvnEOQLjv', 
        label: 'Nujabes' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/pvTHktRtVdQ?si=8X5d3HdVYzfnoZlG', 
        label: 'black balloons' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/jl6kjAkVw_s?si=-tz8J5_hxwo-YWsW', 
        label: 'Sonic' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/im6tbN9SZXs?si=-oGQWgAC8zo-v8Q2', 
        label: 'Pokemon Emerald' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/D83BxptHcRc?si=5y-TOENwWgC4reFb', 
        label: 'Deltarune' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/YZfwXt8naAc?si=PnNJVn_fnJ97j-Ff', 
        label: 'Perfume' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/97xfV6yXcrk?si=yY5rLhOXuWHKrSZu', 
        label: 'The Seatbelts/Cowboy Bebop' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/hrcuIHp4rH0?si=DGlqudr-8XcwzRRH', 
        label: 'Persona 1 PSP' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/rxhkOMuOyqc?si=4zGVcb6s8W5zNAGc', 
        label: 'FFXIII' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/_J2POXbOO20?si=SAEAcIlg0BP0fKe2', 
        label: 'Yuji Ohno' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/8SH2tEgUo2s?si=Mi-UH69wcKQOvXVs', 
        label: 'Earthbound' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/TA1U1lEiOKw?si=6q_chzZhdX9loaPE', 
        label: 'Welcome to the NHK!' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/o4V7he6_j88?si=lEPRTtiPXdK4C7W0', 
        label: 'Marcos Valle' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/k__yyP40qLo?si=OUrHtfQ1H1Uml-R0', 
        label: 'JPEGMAFIA' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/uEP-6meZUQE?si=_MfoOZs1xata75Ls', 
        label: '2 Mello' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/Q_XtQhRsdPg?si=bzT5rePljR00Zbqc', 
        label: 'Pinkpantheress' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/n89bKj8aQ1M?si=AA4SWq3J3aZDXPhg', 
        label: 'Isaiah Rashad' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/Kb-WJTQqq9I?si=rYaRnkIMwOPro1mn', 
        label: 'Nujabes' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/XhEDArtxaXw?si=0tHN_Cfe81Hil4E6', 
        label: 'MF DOOM' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/pieryiIOR0A?si=26W_9qPHLJmtO6Bx', 
        label: 'Serial Experiments Lain' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/9usz3N-Kfa8?si=Fdu-ooOrJgiN9RLr', 
        label: 'Wowaka' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/Ov4i78Lt2x4?si=ul55jok-s_X0tgqP', 
        label: 'Death Note' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/jlcNAjVkLYE?si=III-978z8sxFELs4', 
        label: 'Needy Streamer Overload' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/I0BT0YEySco?si=QKL4-fpOttnQfZlM', 
        label: 'Needy Streamer Overload' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/N2QdpGPyBfo?si=Dx4AV4PyfFEwSZ1T', 
        label: 'Needy Streamer Overload' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/N1NkEHumht0?si=AVkn7H1YspKHLipd', 
        label: 'Little Simz' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/b_PdBWuPm3o?si=eOMCXceTWRCG-x18', 
        label: 'Playboi Carti' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/8SH2tEgUo2s?si=hkRJnTxH0bmEnq5u', 
        label: 'Earthbound' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/urxeNbBc1nk?si=el5OkSXpjD8qIN4M', 
        label: 'vivivivi' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/uWijf1XXncw?si=6TxF9tiCwApaq-WF', 
        label: 'OMORI' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/uEPH9oZ0IKU?si=-_5oz5BYPvThDmnS', 
        label: 'OMORI' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/JQhjXXJpjlk?si=74bWYYuhfTGzHzEp', 
        label: 'Nujabes' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/z_ytLLjp3zk?si=GLcVxXGiI9fPBbe1', 
        label: 'Ace Attorney' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/yRaOI9Wh0BE?si=mN7gvBBZ4cfAPRGF', 
        label: 'Paquin' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/yRaOI9Wh0BE?si=QDFDiDK2_DoK83zw', 
        label: 'Midnight Pretenders' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/X7vM4BPgy0E?si=GBfNOjA2q3jKXNLf', 
        label: 'Beyond Canon' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/_KR-LMSWSdA?si=Cy4z6TThvG9ewtC8', 
        label: 'Final Fantasy VII' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/cJyPtpldb78?si=ufNK3bhGFAGcrhsZ', 
        label: 'Monogatari' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/XcOCSZ3F84A?si=qB57pd7y1ivujxOb', 
        label: 'Neon Genesis Evangelion' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/zWJEHuUZ-fA?si=I-Lk_LSzp-uFLnD3', 
        label: 'Neon Genesis Evangelion' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/gs-MtItyOFc?si=vDRirsRzukduRN2r', 
        label: 'Tame Impala' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/TZyYsPAoDVQ?si=2qfBZ-dMleU5slsc', 
        label: 'Freddie Gibbs, Madlib' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/qUS7hqFFh48?si=BIecwkGopzriA_8r', 
        label: 'Cookin Soul' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/t6JgG__XbRA?si=hASzdbzzQ8y3f7oo', 
        label: 'The Legend of Zelda' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/ugW1fGpPGvc?si=8H-_5ORtBQ4Ie8y4', 
        label: 'kyonpalm' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/y8_AaQTG4Hw?si=pMeeCjpVLP5CTWWK', 
        label: 'Persona 5' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/jWY65NuioKo?si=VrsxW0pu6-P6MX2Q', 
        label: 'SPECTRUM' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/voDqBYuMgvU?si=VkNee90ZmZfBridM', 
        label: 'Playboi Carti' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/AJdTBPuZkHU?si=W6i1KJnrP8mlhTS3', 
        label: 'Lamp' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/BWXPgzcsSx8?si=vApvDFxaF3mu86og', 
        label: 'Kakegurui' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/HhtBDvHMscU?si=rYMGjuTjMSe4wscQ', 
        label: 'Persone 4' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/AJFw3ttvCcQ?si=CyG0ARrnqBXfD6lo', 
        label: 'Sonic' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/wajDKhtL2gk?si=QJ7XPeGuI3KsDe3r', 
        label: 'Final Fantasy VI' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/FhXoJKoUuXE?si=cZI2_49PIViYDCZx', 
        label: 'The Legend of Zelda' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/-VqRYD4qPmI?si=jweCKG9jUElOhMgG', 
        label: 'CORTEX' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/odGExIQTxvg?si=pI_wcoUwub_9QuX8', 
        label: 'Flamingosis' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/sn-TsS5_6ys?si=EnFnnc9xeL6ncUXN', 
        label: 'Street Fighter V' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/7ACFtqqKc-s?si=4ka2aJCw4JEQ9LH5', 
        label: 'Final Fantasy X' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/0BK1rZgyGho?si=tS-I6tG027DO4pfl', 
        label: 'floopy' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/im6tbN9SZXs?si=G2uHIenUUBqO0wSG', 
        label: 'Pokemon Emerald' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/wfARFF9S5Jg?si=kaY7IkWbyZQNqYtx', 
        label: 'Pokemon Emerald' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/97xfV6yXcrk?si=AXPVOi-fOVQCSQWr', 
        label: 'Cowboy Bebop/SEATBELTS' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/XJsy5jJ7Dp0?si=Vc9iNpoqm82FMjkB', 
        label: 'Trauma Center' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/19ZdAZO9FvU?si=dsdX5OoWgzqoP2KS', 
        label: 'Golden Sun' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/380rSziMpxg?si=bFXyFxs1bSvHg-HV', 
        label: 'Tekken 4' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/vsPCsb31mUk?si=WZLv8PCowEQrrLcR', 
        label: 'Katamari' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/_v-L-pim4C8?si=ZWYArA4rt7U_ykh6', 
        label: 'EVISBEATS' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/9E6b3swbnWg?si=v8fYtQDor7icZx3g', 
        label: 'Chopin' 
        },
        { 
        type: 'video', 
        url: 'https://youtu.be/upOhRRYVGkA?si=RtrezN5C1R2UHiEj', 
        label: 'Ace Attorney' 
        },
    ]
    }
};

function formatMediaUrl(url) {
    if (!url) return '';

    if (url.includes('youtube.com') || url.includes('youtu.be')) {
        return url;
    }
    let cleanPath = url;

    if (url.includes('/file/')) {
        const parts = url.split('/file/')[1].split('/');
        parts.shift(); // Remove bucket name
        cleanPath = '/' + parts.join('/');
    } else if (url.startsWith('http://') || url.startsWith('https://')) {
        cleanPath = new URL(url).pathname;
    } else if (!cleanPath.startsWith('/')) {
        cleanPath = '/' + cleanPath;
    }

    return `${MEDIA_PROXY_URL}${cleanPath}`;
}

function updateTaskbarTime() {
    const timeDisplay = document.getElementById('taskbar-time');
    if (!timeDisplay) return;

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    timeDisplay.innerText = `${hours}:${minutes}`;
}

function toggleStartMenu() {
    const menu = document.getElementById('start-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

document.addEventListener('click', (e) => {
    const menu = document.getElementById('start-menu');
    const startBtn = document.querySelector('button[onclick="toggleStartMenu()"]');
    
    if (menu && !menu.contains(e.target) && !startBtn.contains(e.target)) {
        menu.classList.add('hidden');
    }
});

// ==========================================
// WINDOW & FOLDER LOGIC
// ==========================================

function getYouTubeEmbedUrl(url) {
    if (!url) return '';
    try {
        const parsedUrl = new URL(url);
        const playlistId = parsedUrl.searchParams.get('list');
        let videoId = parsedUrl.searchParams.get('v');

        if (!videoId && parsedUrl.hostname.includes('youtu.be')) {
            videoId = parsedUrl.pathname.slice(1).split('?')[0];
        } else if (!videoId && parsedUrl.pathname.includes('/shorts/')) {
            videoId = parsedUrl.pathname.split('/shorts/')[1].split('?')[0];
        }

        if (videoId) videoId = videoId.split('&')[0].split('?')[0];

        if (playlistId) {
            if (videoId) {
                return `https://www.youtube.com/embed/${videoId}?list=${playlistId}`;
            }
            // Standard Playlist
            return `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
        }

        if (videoId) {
            return `https://www.youtube-nocookie.com/embed/${videoId}`;
        }
    } catch (e) {
        console.error("URL Parsing Error:", e);
    }
    return url;
}



function getYouTubeThumbnail(url) {
    if (!url) return '';
    try {
        const parsedUrl = new URL(url);
        let videoId = parsedUrl.searchParams.get('v');

        if (!videoId && parsedUrl.hostname.includes('youtu.be')) {
            videoId = parsedUrl.pathname.slice(1).split('?')[0];
        } else if (!videoId && parsedUrl.pathname.includes('/shorts/')) {
            videoId = parsedUrl.pathname.split('/shorts/')[1].split('?')[0];
        }

        if (videoId) {
            videoId = videoId.split('&')[0].split('?')[0];
            return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }
    } catch (e) {
        console.error("Thumbnail URL Parsing Error:", e);
    }
    return '';
}

// Click-to-load facade: swaps the thumbnail/play-button placeholder for a real
// iframe only when clicked, instead of mounting every YouTube embed at once.
function loadYouTubeEmbed(el) {
    const embedUrl = el.dataset.embedUrl;
    const title = el.dataset.title || 'YouTube video';
    const autoplayUrl = embedUrl + (embedUrl.includes('?') ? '&' : '?') + 'autoplay=1';

    el.outerHTML = `
        <div class="aspect-video border-2 border-purple-900/50 bg-black overflow-hidden relative">
            <iframe 
                class="w-full h-full" 
                src="${autoplayUrl}" 
                title="${title}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </div>`;
}

// Event delegation: DOMPurify strips inline onclick attributes from sanitized HTML,
// so the YouTube facade, blog entry cards, and blog back button are all wired up here.
document.addEventListener('click', (e) => {
    const facade = e.target.closest('[data-embed-url]');
    if (facade) {
        loadYouTubeEmbed(facade);
        return;
    }

    // Force a real new tab via JS instead of relying on the anchor's own target="_blank",
    // since something (a browser setting or extension) can rewrite/strip that attribute.
    // No width/height/position is passed, so browsers render this as a normal tab, not a popup.
    const tabLink = e.target.closest('[data-open-tab]');
    if (tabLink) {
        e.preventDefault();
        window.open(tabLink.href, '_blank');
        return;
    }

    const blogCard = e.target.closest('[data-blog-id]');
    if (blogCard) {
        renderBlogEntry(blogCard.dataset.blogId);
        return;
    }

    const blogBack = e.target.closest('[data-blog-back]');
    if (blogBack) {
        showBlogList();
    }
});


// ==================================================================
// BLOG 
// ==================================================================
const blogEntries = [
    {
        id: 'nana',
        title: 'NANA',
        category: 'Anime',
        dateStarted: '2026-08-11',
        dateFinished: '2026-08-16',
        releaseDate: '2006-04-05',
        image: 'https://f003.backblazeb2.com/file/NiQ-Archive/NiQ-OS/Heroes/nana-osaki-and-nana-komatsu-in-the-nana-anime-2338057635.jpg',
        favorite: false,
        text:   `Anime can't really make relationships, interactions and drama feel "real". 
                There are exceptions of course but I think the one Anime that made this opinion of mine really look like ass was NANA.
                NANA was so addicting for me after the 6th Episode, it hits like crack.
                The music is fire, the characters are fire and the Nana with the black hair (the smart one) is FIRE
                
                Some bulletpoints:

                -Nana (the stupid one) is kinda stupid. I still love her, also because her stupid decisions make this Anime lol

                -The first Opening is a bimmser

                -I love all the characters but dude only Yasu, Kyousuke and Junko . . . Nah actually Yasu ain't normal either, he is the kindest but dude he for sure has problems because he never thinks of himself and never expresses his own emotions FOR HIMSELF . . . mannnn fuck

                -This Anime would have been so easy on our heart if Nana and Nana would be just gay bro, I ship them hard, they are so sweet together (also lowkey queerbaiting)

                -I love the vibe of the anime, its so comforting even though Nana (the stupid one) makes me so STRESSED HOLY FUCK, she is boosting my cortisol

                -Why is cheating so normal?? not only in Nana but apparently in general in Japan??? (My heart dropped when the red haired guy cheated on Nana, I loved when Nana wanted to beat the shit out of him tho)

                -I still can't figure out Takumi, he for sure is a manipulative asshole and narcissistic but he seems to be really caring for Nana and it really does seem to be Love?? Im not sure man. My prediction tho is that he still will cheat in the manga :( 

                -Favorite Character: Nana of course (and Yasu <<<3).
                `
    },
    {
        id: 'ffv',
        title: 'Final Fantasy V - Pixel Remaster',
        category: 'Games',
        dateStarted: '2026-05-04',
        dateFinished: '2026-05-11',
        releaseDate: '2021-04-05',
        image: 'https://f003.backblazeb2.com/file/NiQ-Archive/NiQ-OS/Heroes/FFV.jpg',
        favorite: false,
        text: `I think this is the Final Fantasy that truly manifested the Franchise as a whole and was the real transition between the classic era and the golden Era of FF.
Lots of people give FFIV credit for this and yes, FFIV definitely contributed to this, it showed that video games can tell an actual story and hat written characters in it but FFV defined how a Final Fantasy should FEEL.
It has a nice story, a very fun cast and the gameplay is the best thing here. As a whole I feel like V advanced everything from FFIV, there is a real feel of the big journey here, something that I missed in the Installments before V and something that made every Final Fantasy actually Final Fantasy imo.

I'm not overstating when I say that the Job System here still feels really fresh even tho its a System of a JRPG from the early 90s.
Even tho it's not a deep System there still are many many ways to experiment with it and combine all Job Skills together and see what works, while, sure there are by now the known combinations that kinda break the game and homogenizes playthroughs, especially when you follow a guide.

My gripes with the game itself is that there is no depth to the cast or characters, while I still like them, and will always remember some scenes from it (The Galuf Scene especially was sick af), the characters as a whole are not memorable tho.
It is definetely a step back from Cecil and the Story of FFIV as a whole, when talking about the Story.
Another one is that the game felt a little too long for what it is.
The main Villain, Exdeath (or X-Death? I still don't know lol), is one of my favorite design of Final Fantasy Villains, so it makes me even more sad that Exdeath is REALLY One-Dimensional.

All and all, this game was pretty fun. AND THE MUSIC BRO
Lenna's Theme, Battle at the Big Bridge, The Day Will Come, Exdeaths Battle Theme
All bangers

Maybe this Game will develop a sweet little cushy spot in my heart years later just because of the Music alone. It's a game where I will probably come back with nostalgia and feel more passionate about it but for now it was just a fun game.

Also I feel like Pixel Remasters in general butchered the Difficulty of these games, they are piss easy, when replaying I will turn to the Original or GBA Port `
    },
    {
        id: 'PerfectDays',
        title: 'Perfect Days',
        category: 'Movie',
        dateFinished: '2026-08-30',
        releaseDate: '2023-04-05',
        image: 'https://f003.backblazeb2.com/file/NiQ-Archive/NiQ-OS/Heroes/GKfWu3fWAAAeAZt-763512091.jpg',
        favorite: false,
        text:   `Wage Slaving: 🥱🫩🤢
                Wage Slaving, Japan: 😍🥰`
    },
    {
        id: 'cranesareflying',
        title: 'The Cranes Are Flying',
        category: 'Movie',
        dateFinished: '2026-08-31',
        releaseDate: '1957-04-05',
        image: 'https://f003.backblazeb2.com/file/NiQ-Archive/NiQ-OS/Heroes/vs-untitledfromottvideosonvimeo-9534-982877470.png',
        favorite: true,
        text:   `Probably one of the best endings I've ever seen.
                An ending that came full circle, left me broken and healed me at the same time, gave me hope and left me pessimistic at the same time.
                When doom and fear retreat, optimism and joy appear.

                I could spend a lot of words and time gushing about the ending and how it made my tears fly, but I think, if you've watched this, you'll understand already.
                While it made me feel joyous and triggered bittersweet tears (a lot of them), it also made me feel sad, reflecting on the current state of the world and where it seems to be headed.


                AND THE VISUALS??? Like, damn bro... the scene where Veronika runs off with the locomotive... this shit got me flabbergasted.
                Or how the lighting was used in general, especially when shining on their eyes, creating this shiny spark in them... man, fuck.`
    }
];

function formatBlogDate(dateStr) {
    if (!dateStr) return '?';
    const d = new Date(dateStr);
    if (isNaN(d)) return dateStr;
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// Release dates only need the year - day/month aren't relevant here
function formatReleaseYear(dateStr) {
    if (!dateStr) return '?';
    return String(dateStr).slice(0, 4);
}

function getWatchedVerb(category) {
    return category === 'Games' ? 'Played' : 'Watched';
}

function renderBlogList() {
    const listEl = document.getElementById('blog-entry-list');
    if (!listEl) return;

    const searchTerm = (document.getElementById('blog-search')?.value || '').trim().toLowerCase();
    const category = document.getElementById('blog-category-filter')?.value || 'All';

    const filtered = blogEntries.filter(entry => {
        const matchesCategory = category === 'All' || entry.category === category;
        const matchesSearch = !searchTerm || entry.title.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        listEl.innerHTML = DOMPurify.sanitize(`<div class="text-center text-purple-900/50 text-[10px] py-10 italic">[ NO_ENTRIES_FOUND ]</div>`);
        return;
    }

    const html = filtered.map(entry => `
        <div class="blog-entry-card flex items-center gap-3 bg-purple-900/10 hover:bg-purple-900/30 border border-purple-900/40 hover:border-purple-500 rounded-full px-5 py-2.5 cursor-pointer transition-all" data-blog-id="${entry.id}">
            <span class="text-sm font-bold text-purple-200 uppercase tracking-wide">${entry.title}</span>
            ${entry.favorite ? `<span class="text-red-500 text-sm" title="Favorite">♥</span>` : ''}
            <span class="text-[10px] bg-purple-700/40 border border-purple-500/50 px-2 py-0.5 rounded-full uppercase text-purple-300 shrink-0">${entry.category}</span>
            <span class="ml-auto text-[10px] text-purple-500 shrink-0 hidden sm:inline">${formatBlogDate(entry.dateStarted)} → ${formatBlogDate(entry.dateFinished)}</span>
            <span class="text-[10px] text-purple-600 shrink-0">REL: ${formatReleaseYear(entry.releaseDate)}</span>
        </div>
    `).join('');

    listEl.innerHTML = DOMPurify.sanitize(html);
}

function renderBlogEntry(id) {
    const entry = blogEntries.find(e => e.id === id);
    if (!entry) return;

    const listView = document.getElementById('blog-list-view');
    const detailView = document.getElementById('blog-detail-view');
    if (!listView || !detailView) return;

    const resolvedImage = entry.image ? formatMediaUrl(entry.image) : '';
    const heroStyle = resolvedImage
        ? `background-image:url('${resolvedImage}'); background-size:cover; background-position:center;`
        : '';

    const html = `
        <div class="relative w-full h-64 overflow-hidden shrink-0 bg-black">
            <div class="absolute inset-0" style="${heroStyle} opacity:0.25; -webkit-mask-image:linear-gradient(to bottom, black 0%, black 35%, transparent 100%); mask-image:linear-gradient(to bottom, black 0%, black 35%, transparent 100%);"></div>
            <button data-blog-back="true" class="absolute top-3 left-3 z-20 text-[10px] bg-black/60 hover:bg-purple-700 border border-purple-500/50 px-2 py-1 uppercase text-purple-300 hover:text-white transition-all">← Back</button>
            <div class="absolute bottom-5 left-6 right-6 z-10">
                <h2 class="text-4xl font-bold text-white uppercase tracking-widest flex items-center gap-3">
                    ${entry.title}
                    ${entry.favorite ? `<span class="text-red-500 text-3xl" title="Favorite">♥</span>` : ''}
                </h2>
                <div class="flex flex-wrap gap-2 mt-2 text-[10px] uppercase">
                    <span class="bg-purple-700/50 border border-purple-500/50 px-2 py-0.5 rounded-full text-purple-200">${entry.category}</span>
                    <span class="text-purple-400 self-center">${getWatchedVerb(entry.category)}: ${formatBlogDate(entry.dateStarted)} → ${formatBlogDate(entry.dateFinished)}</span>
                    <span class="text-purple-500 self-center">Released: ${formatReleaseYear(entry.releaseDate)}</span>
                </div>
            </div>
        </div>
        <div class="p-6 text-[15px] leading-8 text-purple-200 whitespace-pre-line blog-entry-text">${entry.text || ''}</div>
    `;

    detailView.innerHTML = DOMPurify.sanitize(html);

    // Any link the entry text embeds should open safely in a new tab too,
    // same as the rest of the site's external links.
    detailView.querySelectorAll('.blog-entry-text a').forEach(a => {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
        a.setAttribute('data-open-tab', 'true');
    });

    listView.classList.add('hidden');
    detailView.classList.remove('hidden');
    detailView.classList.add('flex');
    detailView.scrollTop = 0;
}

function showBlogList() {
    const listView = document.getElementById('blog-list-view');
    const detailView = document.getElementById('blog-detail-view');
    if (detailView) {
        detailView.classList.add('hidden');
        detailView.classList.remove('flex');
    }
    if (listView) listView.classList.remove('hidden');
}

function openBlogWindow() {
    openWindow('win-blog');
    showBlogList();
    renderBlogList();
}

function openDynamicWindow(folderName) {
    const matchedKey = Object.keys(folderConfigs).find(
        key => key.toLowerCase() === folderName.toLowerCase()
    ) || folderName;

    const rawData = folderConfigs[matchedKey];
    const template = document.getElementById('window-template');
    const desktop = document.getElementById('desktop');

    if (!rawData || !template) {
        console.warn(`[SYSTEM] Folder config not found for: "${folderName}"`);
        return;
    }

    let data = [];
    let folderNote = "";
    
    if (Array.isArray(rawData)) {
        data = rawData;
    } else if (rawData && typeof rawData === 'object') {
        data = rawData.items || [];
        folderNote = rawData.note || "";
    }
    // --------------------------------------------------

    const cleanId = matchedKey.replace(/[^a-zA-Z0-9_-]/g, '-').toLowerCase();
    const existingWin = document.getElementById(`win-dynamic-${cleanId}`);

    const getHighestZIndex = () => {
        let maxZ = 100;
        document.querySelectorAll('.window').forEach(w => {
            const z = parseInt(window.getComputedStyle(w).zIndex) || 0;
            if (z > maxZ) maxZ = z;
        });
        return maxZ + 1;
    };

    if (existingWin) {
        existingWin.classList.remove('hidden');
        existingWin.style.zIndex = getHighestZIndex();
        return;
    }

    const win = template.cloneNode(true);
    win.id = `win-dynamic-${cleanId}`;
    win.classList.remove('hidden');

    const offset = Math.floor(Math.random() * 40);
    win.style.top = (120 + offset) + "px";
    win.style.left = (320 + offset) + "px";
    win.style.zIndex = getHighestZIndex();

    win.querySelector('.window-title').innerText = `C:\\USERS\\NiQ\\WORKS\\${folderName.toUpperCase()}`;

    const downloadBtn = win.querySelector('.download-all-btn');
    if (downloadBtn) {
        downloadBtn.onclick = (e) => {
            e.stopPropagation();
            alert(`BULK DOWNLOAD: ${folderName}\nFiles: ${data.length}\nStatus: Pending link generation.`);
        };
    }

    const closeBtn = win.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.onclick = () => win.remove();
    }

    const contentContainer = win.querySelector('.window-content');
    
    const noteHTML = folderNote ? `
        <div class="p-3 mb-2 bg-purple-950/60 border border-purple-500/40 text-purple-200 text-[10px] leading-relaxed relative overflow-hidden group">
            <div class="flex items-center gap-1.5 text-purple-400 font-bold uppercase tracking-wider mb-1">
                <span>📌</span> NOTE.TXT
            </div>
            <p class="font-normal text-purple-200/90 whitespace-pre-line">${folderNote}</p>
            <div class="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_2px]"></div>
        </div>
    ` : '';

    if (data.length === 0) {
        contentContainer.innerHTML = noteHTML + `<div class="text-center text-purple-900/50 text-[10px] py-10 italic">[ FOLDER_EMPTY ]</div>`;
    } else {
        const htmlBuffer = data.map(item => {
            const proxyUrl = formatMediaUrl(item.url);

if (item.type === 'video') {
    const isYouTube = item.url.includes('youtube.com') || item.url.includes('youtu.be');

    if (isYouTube) {
        const embedUrl = getYouTubeEmbedUrl(item.url);
        const thumbUrl = getYouTubeThumbnail(item.url);
        const thumbStyle = thumbUrl ? `background-image:url('${thumbUrl}'); background-size:cover; background-position:center;` : '';
        return `
            <div class="flex flex-col gap-2 mb-4 group/item">
                <div class="aspect-video border-2 border-purple-900/50 bg-black overflow-hidden relative cursor-pointer"
                     style="${thumbStyle}"
                     data-embed-url="${embedUrl}"
                     data-title="${item.label}">
                    <div class="absolute inset-0 bg-black/30 group-hover/item:bg-black/10 transition-colors flex items-center justify-center">
                        <div class="w-12 h-12 rounded-full bg-black/70 flex items-center justify-center group-hover/item:bg-red-600/90 transition-colors">
                            <div class="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-white ml-1"></div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-[9px] text-purple-400 font-bold uppercase tracking-widest">> ${item.label}</span>
                    <a href="${item.url}" target="_blank" rel="noopener noreferrer" data-open-tab="true" class="text-[8px] bg-purple-900/30 px-2 py-0.5 border border-purple-500/50 hover:bg-purple-500 hover:text-white transition-all">Link</a>
                </div>
            </div>`;
    } else {
        return `
            <div class="flex flex-col gap-2 mb-4 group/item">
                <div class="aspect-video border-2 border-purple-900/50 bg-black overflow-hidden relative">
                    <video controls class="w-full h-full" src="${proxyUrl}"></video>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-[9px] text-purple-400 font-bold uppercase tracking-widest">> ${item.label}</span>
                    <a href="${proxyUrl}" target="_blank" rel="noopener noreferrer" data-open-tab="true" class="text-[8px] bg-purple-900/30 px-2 py-0.5 border border-purple-500/50 hover:bg-purple-500 hover:text-white transition-all">VIEW_FULL</a>
                </div>
            </div>`;
    }
} else if (item.type === 'link') {
    const authorHTML = item.author ? `
        <div class="text-[9px] text-purple-400/80 mt-1">
            CREATED_BY: ${
                item.author.url 
                ? `<a href="${item.author.url}" target="_blank" rel="noopener noreferrer" data-open-tab="true" class="text-purple-300 underline hover:text-white">${item.author.name}</a>` 
                : `<span class="text-purple-300">${item.author.name}</span>`
            }
        </div>` : '';

    const descriptionHTML = item.description ? `
        <p class="text-[10px] text-purple-300/80 leading-relaxed mt-2 border-t border-purple-900/30 pt-2 font-normal normal-case">
            ${item.description}
        </p>` : '';

    return `
        <div class="flex flex-col gap-1 mb-4 p-3 border-2 border-purple-900/50 bg-purple-900/10 hover:bg-purple-900/20 transition-all group/item">
            <div class="flex justify-between items-start gap-2">
                <div class="flex-1">
                    <div class="flex items-center gap-1.5">
                        <span class="text-purple-400 text-[12px]">🔗</span>
                        <span class="text-[11px] text-purple-200 font-bold uppercase tracking-wider group-hover/item:text-white transition-colors">
                            ${item.label}
                        </span>
                    </div>
                    ${authorHTML}
                </div>
                <a href="${item.url}" target="_blank" rel="noopener noreferrer" data-open-tab="true" class="text-[9px] bg-purple-900/40 text-purple-300 px-2.5 py-1 border border-purple-500/50 hover:bg-purple-500 hover:text-white transition-all whitespace-nowrap font-bold">
                    VISIT_RESOURCE ↗
                </a>
            </div>
            ${descriptionHTML}
        </div>`;
} else {
    return `
        <div class="flex flex-col gap-2 mb-4 group/item">
            <div class="border-2 border-purple-900/50 bg-purple-900/10 p-1">
                <img src="${proxyUrl}" class="w-full opacity-70 group-hover/item:opacity-40 transition-all" alt="${item.label}">
            </div>
            <div class="flex justify-between items-center">
                <span class="text-[9px] text-purple-400 font-bold uppercase tracking-widest">> ${item.label}</span>
                <a target="_blank" href="${proxyUrl}" rel="noopener noreferrer" data-open-tab="true" class="text-[8px] bg-purple-900/30 px-2 py-0.5 border border-purple-500/50 hover:bg-purple-500 hover:text-white transition-all">VIEW_FULL</a>
            </div>
        </div>`;
}
}).join('');

const rawHTML = noteHTML + htmlBuffer;
contentContainer.innerHTML = DOMPurify.sanitize(rawHTML);    
}

    desktop.appendChild(win);
    
    win.onmousedown = () => {
        win.style.zIndex = getHighestZIndex();
    };

    initDrag(win);
}



function filterFolderItems(category, folderName) {
    const cleanId = folderName.replace(/\s+/g, '-').toLowerCase();
    const win = document.getElementById(`win-dynamic-${cleanId}`);
    if (!win) return;
    
    const data = folderConfigs[folderName];
    renderFolderContent(win, data, category);
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

async function testVaultConnection(fileName) {
    console.log(`%c[SYSTEM] Initializing Vault Link: ${VAULT_URL}/${fileName}`, "color: #00ff00");
    
    try {
        const response = await fetch(`${VAULT_URL}/${fileName}`, { method: 'HEAD' });
        
        if (response.ok) {
            console.log("%c[SUCCESS] Vault connection established. File located.", "color: #00ff00; font-weight: bold;");
            return true;
        } else {
            console.error(`[ERROR] Vault responded with status: ${response.status}`);
            console.log("%c[TIP] Check if the file is public in Backblaze and that your Transform Rule is correct.", "color: #ffaa00");
            return false;
        }
    } catch (err) {
        console.error("[CRITICAL] Network Error: Could not reach vault.", err);
        return false;
    }
}


// ==========================================
// LASTFM PLAYER
// ==========================================



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
    if (!player) return;

    player.classList.remove('hidden');

    try {
        const response = await fetch(`${API_BASE_URL}/api/lastfm`);
        
        if (!response.ok) {
            throw new Error(`Server responded with ${response.status}`);
        }

        const data = await response.json();
        
        if (!data.recenttracks || !data.recenttracks.track || data.recenttracks.track.length === 0) {
            if (statusText) statusText.innerText = "NO DATA FOUND";
            return;
        }
        
        const track = data.recenttracks.track[0];
        const trackLink = document.getElementById('track-link');

        if (trackLink && track.url) {
            trackLink.href = track.url;
        }

        const isPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';

        if (trackName) trackName.innerText = (track.name || "UNKNOWN TRACK").toUpperCase();
        if (artistName) artistName.innerText = (track.artist?.['#text'] || track.artist?.name || "UNKNOWN ARTIST").toUpperCase();
        
        const artUrl = track.image && track.image[2] ? track.image[2]['#text'] : '';
        if (trackArt) {
            trackArt.src = artUrl || './res/disc_icon.png';
        }

        if (isPlaying) {
            if (statusText) statusText.innerHTML = `<span class="text-green-400 animate-pulse">>> NOW PLAYING <<</span>`;
            if (visualizer) {
                visualizer.style.opacity = "1";
                Array.from(visualizer.children).forEach(bar => bar.style.animationPlayState = 'running');
            }
        } else {
            const timeAgo = track.date ? getRelativeTime(track.date.uts) : "JUST NOW";
            if (statusText) {
                statusText.innerText = `[PAUSED] - ${timeAgo}`;
                statusText.classList.remove('text-green-400');
            }
            if (visualizer) {
                visualizer.style.opacity = "0.2";
                Array.from(visualizer.children).forEach(bar => {
                    bar.style.animationPlayState = 'paused';
                    bar.style.height = '10%'; 
                });
            }
        }
    } catch (error) {
        console.error("Music Fetch Error:", error);
        if (statusText) {
            statusText.innerText = "SIGNAL LOST (API ERROR)";
            statusText.classList.remove('text-green-400');
        }
        if (visualizer) {
            visualizer.style.opacity = "0.2";
            Array.from(visualizer.children).forEach(bar => {
                bar.style.animationPlayState = 'paused';
                bar.style.height = '10%';
            });
        }
    }
}

const MUSIC_POLL_INTERVAL = 30000;
let musicPollTimer = null;

function startMusicPolling() {
    if (musicPollTimer) return;
    fetchMusicData();
    musicPollTimer = setInterval(fetchMusicData, MUSIC_POLL_INTERVAL);
}

function stopMusicPolling() {
    clearInterval(musicPollTimer);
    musicPollTimer = null;
}

initVisualizer();
startMusicPolling();

document.getElementById('blog-search')?.addEventListener('input', renderBlogList);
document.getElementById('blog-category-filter')?.addEventListener('change', renderBlogList);

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopMusicPolling();
    } else {
        startMusicPolling();
    }
});

updateTaskbarTime();
setInterval(updateTaskbarTime, 1000);

const notepad = document.getElementById('win-notepad');
if (notepad) {
    initDrag(notepad);
    
    notepad.querySelector('textarea').focus();

    notepad.onmousedown = () => {
        document.querySelectorAll('.window').forEach(w => w.style.zIndex = "10");
        notepad.style.zIndex = "50";
    };
}

const showcaseWin = document.getElementById('win-image-showcase');
if (showcaseWin) {
    initDrag(showcaseWin);
    
    showcaseWin.onmousedown = () => {
        document.querySelectorAll('.window').forEach(w => w.style.zIndex = "10");
        showcaseWin.style.zIndex = "50";
    };
}

if (player) {
    initDrag(player);
    
    // Bring to front on click
    player.onmousedown = () => {
        document.querySelectorAll('.window, #music-player').forEach(w => w.style.zIndex = "10");
        player.style.zIndex = "100";
    };
}

/**
 * @param {string} name - Name of the project
 * @param {string} thumb - Path to the image thumbnail
 * @param {string} fileName - The actual file to be downloaded
 */
/*
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
     */
/**
 * Handles the actual download logic
 */
function triggerProjectDownload(fileName) {
    const fileUrl = `${VAULT_URL}/${fileName}`; 

    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = "_blank";
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log(`%c[SYSTEM] Fetching ${fileName} from VAULT...`, "color: #A221A2");
}


// ==========================================
// CONTACT / EMAIL
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

    if (!email || !message) {
        alert("CRITICAL_ERROR: FIELDS_EMPTY");
        return;
    }

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
            
            if (errorData.error === "DAILY_LIMIT_EXCEEDED") {
                statusText.innerText = "ERROR: DAILY_QUOTA_REACHED";
                alert("ACCESS DENIED: You have reached the maximum of 2 messages per day.");
            } else {
                statusText.innerText = `ERROR: ${errorData.error || 'UPLINK_REJECTED'}`;
            }
            
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
// BUFFER CLEAR
// ==========================================

window.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file-upload');
    const fileStatus = document.getElementById('file-status');

    if (fileInput) {
        fileInput.value = ''; 
    }

    if (fileStatus) {
        fileStatus.innerText = "UPLOAD";
        fileStatus.className = "text-[10px] text-purple-500";
    }

    console.log("SYSTEM: Temporary buffers cleared. Ready for input.");
});