function logIn(event) {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const username_error = document.getElementById("username_error");
    const password_error = document.getElementById("password_error");
    const responseMessage = document.getElementById("response-message");

    // Get input values
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Reset error messages
    username_error.style.display = "none";
    password_error.style.display = "none";
    responseMessage.textContent = "";

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

    if (!event) {
        event.preventDefault(); // Prevent submission if form is invalid
    }

    // AJAX request to send data to the server
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "LogInPage.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            responseMessage.textContent = xhr.responseText; // Display response from server
        }
    };
    xhr.send(`username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);
}

function createAccount(event) {
    event.preventDefault(); // Prevent form submission
    window.alert("Create Account");
}
