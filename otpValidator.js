import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "info.ciphervault@gmail.com",
    pass: "pblf mvmp ojan ivba", // App password
  },
});

export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000); // 6-digit random number
}

export async function sendOTP(email) {
  const otp = generateOTP();

  const mailOptions = {
    from: "info.ciphervault@gmail.com",
    to: email,
    subject: "Your Verification Code",
    text: `Your One-Time Password (OTP) is: ${otp}. Please use this code to complete your verification.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("OTP sent to email:", email);
    return otp;
  } catch (error) {
    console.error("Error sending OTP:", error);
    return null;
  }
}
