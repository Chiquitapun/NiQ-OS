require('dns').setDefaultResultOrder('ipv4first'); 
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

// 1. Initialize Express App
const app = express();
app.set('trust proxy', 1);

// 2. Base Security & Body Parsing Middleware
app.use(helmet());
app.use(express.json({ limit: '10kb' }));

// 3. CORS Configuration
const isDev = process.env.NODE_ENV === 'development';
const allowedOrigins = isDev ? [
    'http://localhost:5500',
    'http://127.0.0.1:5500',
    'http://localhost:3000'
] : [
    'https://chiquitapun.github.io',
    'https://chipun.com',
    'https://www.chipun.com'
];

app.use(cors({
    origin: (origin, callback) => {
        // ALLOW if origin is in the list, OR if it's a local tool (!origin) but ONLY in development
        if (allowedOrigins.includes(origin) || (isDev && !origin)) {
            callback(null, true);
        } else {
            callback(null, false); 
        }
    },
    methods: ['GET', 'POST', 'OPTIONS'], // Included GET for Last.fm
    allowedHeaders: ['Content-Type']
}));

// 4. Initialize Mailer & Rate Limiter
const resend = new Resend(process.env.RESEND_API_KEY);
const dailyLimitMs = 24 * 60 * 60 * 1000;

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
    standardHeaders: true,
    legacyHeaders: false,
});

const contactLimiter = rateLimit({
    windowMs: dailyLimitMs, 
    max: 2,
    standardHeaders: true,
    legacyHeaders: false,
    message: { 
        error: "DAILY_LIMIT_EXCEEDED",
        message: "System: Maximum of 2 transmissions allowed per 24-hour cycle."
    }
});

// 5. Contact API Route
app.post('/api/contact', contactLimiter, async (req, res) => {
    const { email, message } = req.body; 

    if (!email || !message) {
        return res.status(400).send({ error: "MISSING_FIELDS" });
    }

    if (typeof email !== 'string' || typeof message !== 'string' || message.length > 2000) {
        return res.status(400).send({ error: "INVALID_PAYLOAD" });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'NiQ OS <onboarding@resend.dev>',
            to: [process.env.MY_EMAIL],
            replyTo: email,
            subject: `NiQ OS: Message from ${email}`,
            text: message
        });

        if (error) {
            console.error("RESEND_API_ERROR:", error);
            return res.status(500).send({ error: "TRANSMISSION_FAILED" });
        }

        res.status(200).send({ success: true, id: data.id });
    } catch (error) {
        console.error("SYSTEM_ERROR:", error);
        res.status(500).send({ error: "NETWORK_TIMEOUT" });
    }
});

// 6. Last.fm Secure Proxy Route
app.get('/api/lastfm', apiLimiter, async (req, res) => {
    try {
        const apiKey = process.env.LASTFM_API_KEY;
        const username = process.env.LASTFM_USERNAME;

        if (!apiKey || !username) {
            return res.status(500).json({ error: "Last.fm credentials not configured on server" });
        }

        const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`;
        
        const response = await fetch(url);
        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        console.error("LASTFM_ERROR:", error);
        res.status(500).json({ error: "Failed to fetch music data" });
    }
});

// 7. Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`SYSTEM ONLINE: Port ${PORT}`));