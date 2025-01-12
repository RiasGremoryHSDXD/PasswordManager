function logIn() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const usernameError = document.getElementById("username_error");
    const passwordError = document.getElementById("password_error");

    // Get input values
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Reset errors
    usernameError.style.display = "none";
    passwordError.style.display = "none";

    let valid = true;

    usernameInput.addEventListener("input", () => {
        usernameInput.style.border = "1px solid #ced4da";
        usernameError.style.display = "none";
    });

    passwordInput.addEventListener("input", () => {
        passwordInput.style.border = "1px solid #ced4da";
        passwordError.style.display = "none";
    });

    // Validate inputs
    if (username === "") {
        usernameInput.style.border = "solid 2px red";
        usernameError.style.display = "block";
        valid = false;
    } else {
        usernameInput.style.border = "1px solid #ced4da";
    }

    if (password === "") {
        passwordInput.style.border = "solid 2px red";
        passwordError.style.display = "block";
        valid = false;
    } else {
        passwordInput.style.border = "1px solid #ced4da";
    }

    if (!valid) {
        return; // Stop further execution if validation fails
    }

    // AJAX request to send data to the server
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "LogInPage.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Send form data
    xhr.send("username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password));
}

