const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Create the transporter for sending email using Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'info.ciphervault@gmail.com',
        pass: 'pblf mvmp ojan ivba',
    },
});

// Endpoint to send OTP
app.post('/send-otp', async (req, res) => {
    const { email } = req.body;

    const OTP_generated = generateOTP();

    const mailOptions = {
        from: 'info.ciphervault@gmail.com',
        to: email,
        subject: 'Your Verification Code',
        text: `Your One-Time Password (OTP) is: ${OTP_generated}. Please use this code to complete your verification. The code is valid for 10 minutes. Do not share this code with anyone.`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ OTP: OTP_generated });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while sending the verification code. Please try again later.' });
    }
});

// Function to generate OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
