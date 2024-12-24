function logIn() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    if (usernameInput.value.trim() === "") {
        usernameInput.style.border = "solid 2px red";
        window.alert('Please enter a username');
    }
}


function createAccount()
{
    window.alert('Create Account');
}