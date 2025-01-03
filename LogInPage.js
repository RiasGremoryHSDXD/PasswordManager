function logIn() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const usernameError = document.getElementById("username_error");
    const passwordError = document.getElementById("password_error");
    const responseMessage = document.getElementById("response-message");

    // Get input values
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Reset errors
    usernameError.style.display = "none";
    passwordError.style.display = "none";
    responseMessage.textContent = "";

    let valid = true;

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
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                responseMessage.textContent = xhr.responseText; // Display response from server
                responseMessage.style.color = "green";
            } else {
                responseMessage.textContent = "An error occurred!";
                responseMessage.style.color = "red";
            }
        }
    };

    // Send form data
    xhr.send("username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password));
}

