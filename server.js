require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

const app = express();

// 1. PROXY FIX (Crucial for Render)
app.set('trust proxy', 1);

// 2. BULLETPROOF CORS (Fixes the red errors in your screenshot)
app.use(cors({
    origin: '*', // Allow all domains to connect for now
    methods: ['POST', 'OPTIONS'], // Explicitly allow POST and OPTIONS
    allowedHeaders: ['Content-Type'] // Allow JSON headers
}));
app.options('*', cors()); // Explicitly answer the browser's "preflight" check

// 3. JSON PARSER
app.use(express.json());

// 4. MAIL TRANSPORTER
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// 5. RELAXED BOUNCER (Allows 5 emails every 15 mins for testing)
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5, 
    message: { error: "ACCESS_DENIED: Rate limit exceeded" },
    standardHeaders: true,
    legacyHeaders: false,
});

// 6. THE UPLINK ROUTE
app.post('/api/contact', contactLimiter, async (req, res) => {
    const { email, message } = req.body; 

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