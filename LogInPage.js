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
    }

    if (password === "") {
        passwordInput.style.border = "solid 2px red";
        password_error.style.display = "block";
        valid = false; // Mark as invalid
    }

    if (!valid) {
        event.preventDefault(); // Prevent submission if form is invalid
    }
}
