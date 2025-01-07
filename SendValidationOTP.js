const nodemailer = require('nodemailer');

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'info.ciphervault@gmail.com',
        pass:'pblf mvmp ojan ivba',
    },
});

function generateOTP(){
    return Math.floor(100000 + Math.random() * 900000);
}

async function sendOTP(email)
{
    const OTP_generated = generateOTP();

    const mailOptions = 
    {
        from: "info.ciphervault@gmail.com",
        to: email,
        subject: "Your Verification Code",
        text: `Your One-Time Password (OTP) is: ${OTP_generated}. Please use this code to complete your verification. The code is valid for 10 minutes. Do not share this code with anyone.`,
    };

    try
    {
        await transporter.sendMail(mailOptions);
        alert('Your Verification Code has been sent to your email address. Please check your email inbox and enter the code below to complete your verification.');
        return OTP_generated;
    }
    catch(error)
    {
        alert('An error occurred while sending the verification code. Please try again later.');
    }
}

async function validate_otp()
{
    const email = document.getElementById('email').value;
    const setOTP = await sendOTP(email);
    
    alert(`The OTP code that being send is ${setOTP} in the gmale of ${email}`);
}