
async function logIn() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const usernameError = document.getElementById("username_error");
    const passwordError = document.getElementById("password_error");
    let username_credentials = document.getElementById("username_credentials");
    let password_credentials = document.getElementById("password_credentials");

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
        username_credentials.style.display = "none";
    });

    passwordInput.addEventListener("input", () => {
        passwordInput.style.border = "1px solid #ced4da";
        passwordError.style.display = "none";
        password_credentials.style.display = "none";
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

    try {
        let isAuthentication = await authentication(username, password);

        if(isAuthentication)
        {
            window.location.href = "./MainMenuFile/MainMenu.html";
        }
        else
        {
            usernameInput.style.border = "solid 2px red";
            passwordInput.style.border = "solid 2px red";
            username_credentials.style.display = "block";
            password_credentials.style.display = "block";
        }
    } catch (error) {
        
    }
}

async function authentication(username, password)
{
    try {
        const response = await fetch('LogInPage.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
        });
        let fetch_data = await response.json();
        return fetch_data;
    } catch (error) {
        console.log("WEW")
    }
}
