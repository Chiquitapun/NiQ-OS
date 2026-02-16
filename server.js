require('dns').setDefaultResultOrder('ipv4first'); 
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend'); // <--- Swapped Nodemailer for Resend
const rateLimit = require('express-rate-limit');

const app = express();
app.set('trust proxy', 1);
app.use(express.json());

// CORS configuration
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


// Initialize the API Mailer
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

    try {
        // Sending via HTTP API instead of SMTP to bypass Render's firewall
        const { data, error } = await resend.emails.send({
            from: 'NiQ OS <onboarding@resend.dev>', // Resend's free tier sending address
            to: [process.env.MY_EMAIL], // Your verified email address
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`SYSTEM ONLINE: Port ${PORT}`));