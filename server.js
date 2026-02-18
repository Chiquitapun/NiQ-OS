require('dns').setDefaultResultOrder('ipv4first'); 
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend'); 
const rateLimit = require('express-rate-limit');

const app = express();

// 1. DYNAMIC CORS FIX: Includes your local testing URLs
const allowedOrigins = [
    'https://chiquitapun.github.io',
    'https://leafy.github.io',
    'http://localhost:5500',      // Common VS Code Live Server port
    'http://127.0.0.1:5500',    // Alternative local IP
    'http://localhost:3000'
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl) 
        // or those in our whitelist
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.log("CORS REJECTED ORIGIN:", origin);
            callback(new Error('CORS_NOT_ALLOWED'));
        }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// 2. PARSER: Must come after CORS but before routes
app.use(express.json());

// 3. PATH FIX: We no longer use app.options('*'). 
// Express 5/Node 22 handles preflight automatically via the middleware above.
// This prevents the PathError crash seen in your logs.

const resend = new Resend(process.env.RESEND_API_KEY);

const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 10, 
    message: { error: "LIMIT_EXCEEDED" }
});

app.post('/api/contact', contactLimiter, async (req, res) => {
    const { email, message } = req.body; 

    if (!email || !message) {
        return res.status(400).send({ error: "MISSING_FIELDS" });
    }

    if (hp) {
        console.warn("BOT_DETECTED: Honeypot triggered.");
        return res.status(400).send({ error: "BOT_DETECTED" });
    }

    // 2. BOUNCER: Proper Email Check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).send({ error: "INVALID_EMAIL" });
    }

    if (!message || message.length < 5) {
        return res.status(400).send({ error: "MESSAGE_TOO_SHORT" });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'NiQ OS <onboarding@resend.dev>',
            to: [process.env.MY_EMAIL], 
            replyTo: email,
            subject: `NiQ OS: Message from ${email}`,
            text: `Sender: ${email}\n\nMessage: ${message}`
        });

        if (error) {
            console.error("RESEND_ERROR:", error);
            return res.status(500).send({ error: "UPLINK_FAILURE" });
        }

        res.status(200).send({ success: true });
    } catch (error) {
        console.error("SYSTEM_ERROR:", error);
        res.status(500).send({ error: "NETWORK_TIMEOUT" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`SYSTEM ONLINE: Port ${PORT}`));