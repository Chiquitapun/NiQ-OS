require('dotenv').config();
const dns = require('dns');

// 1. RENDER NETWORK FIX: Force IPv4 to prevent ENETUNREACH crash
dns.setDefaultResultOrder('ipv4first'); 

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const fs = require('fs'); 

const app = express();
app.set('trust proxy', 1);

// 2. JSON PARSER MUST BE BEFORE ROUTES
app.use(express.json());

// 3. STRICT CORS + PREFLIGHT FIX
app.use(cors({
    origin: 'https://chiquitapun.github.io', // Make sure this matches where you are testing!
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));
app.options('*', cors()); // <--- CRITICAL: This answers the browser's hidden security check

// Ensure 'uploads' directory exists
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// 4. MAIL TRANSPORTER
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

// 5. RELAXED BOUNCER (Allows 10 tests per 15 minutes so you don't get 429 locked out)
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 10, 
    message: { 
        error: "ACCESS_DENIED: Rate limit exceeded",
        retryAfter: "Please try again later."
    },
    standardHeaders: true, 
    legacyHeaders: false, 
});

// 6. THE UPLINK ROUTE
app.post('/api/contact', contactLimiter, async (req, res) => {
    const { email, message } = req.body; 

    // Safety check to prevent the "req.body is undefined" error
    if (!email || !message) {
        return res.status(400).send({ error: "MISSING_DATA" });
    }

    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `NiQ OS: Message from ${email}`,
            text: message
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send({ success: true });
    } catch (error) {
        console.error("MAIL_ERROR:", error);
        res.status(500).send({ error: "UPLINK_CRASHED" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`SYSTEM ONLINE: Port ${PORT}`));