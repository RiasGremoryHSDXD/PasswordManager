function logIn(event) {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username_error = document.getElementById('username_error');
    const password_error = document.getElementById('password_error');

    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();

    let valid = true; // Flag to track form validity

    if (username === "") {
        usernameInput.style.border = "solid 2px red";
        username_error.style.display = "block";
        valid = false; // Mark as invalid
    } else {
        usernameInput.style.border = "1px solid #ced4da";
        username_error.style.display = "none";
    }

    if (password === "") {
        passwordInput.style.border = "solid 2px red";
        password_error.style.display = "block";
        valid = false; // Mark as invalid
    } else {
        passwordInput.style.border = "1px solid #ced4da";
        password_error.style.display = "none";
    }

    if (!valid) {
        event.preventDefault(); // Prevent submission if form is invalid
    }
}

// Add event listener to reset error states
document.getElementById('username').addEventListener('focus', function () {
    this.style.border = "1px solid #ced4da";
    document.getElementById('username_error').style.display = "none";
});

document.getElementById('password').addEventListener('focus', function () {
    this.style.border = "1px solid #ced4da";
    document.getElementById('password_error').style.display = "none";
});

function createAccount(event) {
    event.preventDefault(); // Prevent form submission
    window.alert('Create Account');
}

// Attach the logIn function to the form submit event
document.getElementById('loginForm').addEventListener('submit', logIn);
