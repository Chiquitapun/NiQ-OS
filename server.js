// LINE 1: This MUST be the very first thing in your file to force IPv4
require('dns').setDefaultResultOrder('ipv4first'); 

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const fs = require('fs'); 

const app = express();
app.set('trust proxy', 1);
app.use(express.json());

// UPDATED CORS: Fixed for both possible GitHub URLs
const allowedOrigins = [
    'https://chiquitapun.github.io',
    'https://leafy.github.io'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('CORS_NOT_ALLOWED'));
        }
    },
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false 
    }
});

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

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `NiQ OS: Message from ${email}`,
            text: message
        });
        res.status(200).send({ success: true });
    } catch (error) {
        // This will now log the error but won't crash the server
        console.error("TRANSMISSION_ERROR:", error);
        res.status(500).send({ error: "NETWORK_TIMEOUT" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`SYSTEM ONLINE: Port ${PORT}`));