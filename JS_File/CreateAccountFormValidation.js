import { validatingField} from "./CreateAccountTextFieldValidation";
import { sendOTP } from "./OneTimePasswordValidation";


function createAccount() {
    window.location.href = "../CreateAccount.html";
}

async function proceedCreateAccount(event)
{
    event.preventDefault();

    const fields = [
        {id:"firstName", message:"first_name_error"},
        {id:"middleName", message:"middle_name_error"},
        {id:"lastName", message:"last_name_error"},
        {id:"email", message:"email_error"},
        {id:"username", message:"username_error"},
        {id:"password", message:"password_error"}
    ];

    if(!validatingField(fields))
    {
        return;
    }

    const email = document.getElementById("email").value.trim();

    try
    {
        const otp = await sendOTP(email);
        if(otp)
        {
            window.location.href = "../MainMenu.html";
            document.getElementById("otp-verification").style.display = "block";
        }
        else 
        {
            alert("Failed to send OTP. Please try again.");
        }
        
    }
    catch(e)
    {
        console.error("Error during OTP process:", error);
    }
}

document
  .getElementById("verifyOtpButton")
  .addEventListener("click", function () {
    const enteredOTP = document.getElementById("otpInput").value;
    const generatedOTP = sessionStorage.getItem("generatedOTP");

    if (enteredOTP === generatedOTP) {
      alert("OTP verified successfully! Account created.");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  });
  
document
  .getElementById("createAccountForm")
  .addEventListener("submit", proceedCreateAccount);