const nodemailer = require("nodemailer");
const prompt = require("prompt-sync")();

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // Use Gmail or another email provider
  auth: {
    user: "info.ciphervault@gmail.com", // Replace with your email
    pass: "pblf mvmp ojan ivba", // Replace with your email password (or app-specific password)
  },
});

// Generate Random OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000); // 6-digit random number
}

// Send OTP Function
async function sendOTP(email) {
  const otp = generateOTP();
  console.log(`Generated OTP: ${otp}`); // For debugging

  // Send Email
  const mailOptions = {
    from: "info.ciphervault@gmail.com",
    to: email,
    subject: "Your Verification Code",
    text: `Your OTP is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`OTP sent to ${email}`);
    return otp;
  } catch (error) {
    console.error("Error sending OTP:", error);
    return null;
  }
}

// Main Function to Test OTP Verification
async function main() {
  const email = prompt("Enter your email: ");
  const sentOTP = await sendOTP(email);

  console.log(`Boolean value of sentOTP: ${sentOTP}`); // For debugging
  if (!sentOTP) {
    console.log("Failed to send OTP. Exiting.");
    return;
  }

  // Ask User to Enter OTP
  const enteredOTP = prompt("Enter the OTP sent to your email: ");

  if (enteredOTP == sentOTP) {
    console.log("OTP verified successfully!");
  } else {
    console.log("Invalid OTP. Please try again.");
  }
}

main();
