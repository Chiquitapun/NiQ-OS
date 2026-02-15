require('dotenv').config();
const dns = require('dns');

// 1. NETWORK FIX: Force IPv4. This stops the "ENETUNREACH" and "Timeout" errors 
// shown in your logs (Image 12).
dns.setDefaultResultOrder('ipv4first'); 

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const fs = require('fs'); 

const app = express();
app.set('trust proxy', 1);

// 2. PARSER: Must come before routes
app.use(express.json());

// 3. UPDATED CORS: Allowing both your GitHub origins to stop the mismatch error
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


// 5. UPDATED MAIL TRANSPORTER: Added a longer timeout for cloud networks
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    tls: {
        rejectUnauthorized: false 
    }
});

// 6. TESTING LIMITER: 10 tries every 15 mins so you don't get 429-locked
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 10, 
    message: { error: "LIMIT_REACHED" }
});

// 7. THE UPLINK ROUTE
app.post('/api/contact', contactLimiter, async (req, res) => {
    const { email, message } = req.body; 

    if (!email || !message) {
        return res.status(400).send({ error: "INCOMPLETE_DATA" });
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
        console.error("MAIL_ERROR:", error);
        res.status(500).send({ error: "UPLINK_TIMEOUT" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`SYSTEM ONLINE: Port ${PORT}`));