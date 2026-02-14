require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
//const multer = require('multer');
const rateLimit = require('express-rate-limit');
const fs = require('fs'); // Added for file system cleanup



const app = express();

app.set('trust proxy', 1);

app.use(express.json());
app.use(cors({
    origin: 'https://leafy.github.io', // Replace 'leafy' with your actual GitHub username
    methods: ['POST']
}));

// Ensure 'uploads' directory exists on boot
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// 1. THE BOUNCER: Anti-Spam
// 1. THE 24-HOUR BOUNCER
const contactLimiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    max: 1, // Only 1 request per window
    message: { 
        error: "ACCESS_DENIED: One mail per 24h",
        retryAfter: "Please try again tomorrow."
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// 2. THE MAIL SORTER: Secure Multer Config
/*const upload = multer({ 
    dest: 'uploads/',
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
    fileFilter: (req, file, cb) => {
        // Block dangerous executables
        const forbidden = /\.(exe|bat|sh|js)$/i;
        if (forbidden.test(file.originalname)) {
            return cb(new Error('FILE_TYPE_REJECTED'), false);
        }
        cb(null, true);
    }
});*/

// 3. THE UPLINK ROUTE
app.post('/api/contact', contactLimiter, async (req, res) => {
    // Because we use express.json() and send JSON from the frontend,
    // req.body will now contain our data!
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