function createAccount() {
    window.location.href = "CreateAccount.html";
}

function proceedCreateAccount(event)
{
    event.preventDefault();
    const firstName = document.getElementById("firstName").value.trim();
    const middleName = document.getElementById("middleName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    let valid = true;

    if (firstName === "") {
        document.getElementById("firstName").style.border = "solid 2px red";
        valid = false;
    } else {
        document.getElementById("firstName").style.border = "1px solid #ced4da";
    }

    if (middleName === "") {
        document.getElementById("middleName").style.border = "solid 2px red";
        valid = false;
    } else {
        document.getElementById("middleName").style.border = "1px solid #ced4da";
    }

    if (lastName === "") {
        document.getElementById("lastName").style.border = "solid 2px red";
        valid = false;
    } else {
        document.getElementById("lastName").style.border = "1px solid #ced4da";
    }

    if(email === "")
    {
        document.getElementById("email").style.border = "solid 2px red";
        valid = false;
    }
    else
    {
        document.getElementById("email").style.border = "1px solid #ced4da";
    }

    if (username === "") {
        document.getElementById("username").style.border = "solid 2px red";
        valid = false;
    } else {
        document.getElementById("username").style.border = "1px solid #ced4da";
    }

    if (password === "") {
        document.getElementById("password").style.border = "solid 2px red";
        valid = false;
    } else {
        document.getElementById("password").style.border = "1px solid #ced4da";
    }

    if (!valid) {
        return; // Stop further execution if validation fails
    }
}

document.getElementById('createAccountForm').addEventListener('submit', proceedCreateAccount);