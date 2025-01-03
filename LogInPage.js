// Validate form fields
function validateForm(event) {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username_error = document.getElementById('username_error');
    const password_error = document.getElementById('password_error');

    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();

    let valid = true;

    if (username === "") {
        usernameInput.style.border = "solid 2px red";
        username_error.style.display = "block";
        valid = false;
    } else {
        usernameInput.style.border = "1px solid #ced4da";
        username_error.style.display = "none";
    }

    if (password === "") {
        passwordInput.style.border = "solid 2px red";
        password_error.style.display = "block";
        valid = false;
    } else {
        passwordInput.style.border = "1px solid #ced4da";
        password_error.style.display = "none";
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
}

// Handle "Create Account" button click
function createAccount(event) {
    event.preventDefault();
    alert('Create Account');
}

// Attach validation to the form's submit event
document.getElementById('loginForm').addEventListener('submit', validateForm);

// Reset input errors on focus
document.getElementById('username').addEventListener('focus', function () {
    this.style.border = "1px solid #ced4da";
    document.getElementById('username_error').style.display = "none";
});

document.getElementById('password').addEventListener('focus', function () {
    this.style.border = "1px solid #ced4da";
    document.getElementById('password_error').style.display = "none";
});
