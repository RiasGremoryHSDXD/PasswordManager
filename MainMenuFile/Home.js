let add_entry_button = document.getElementById("add_entry")
let get_modal_container = document.getElementById("modal_container");
let get_cancel_button = document.getElementById("cancel_button");
let get_add_button = document.getElementById("add_button");
let get_site_name = document.getElementById("save_site_name");
let get_username = document.getElementById("save_username");
let get_password = document.getElementById("save_password");
let get_note = document.getElementById("save_note")
let get_link = document.getElementById("save_link");


add_entry_button.addEventListener('click', () =>
{
    get_modal_container.style.display = "block";
    add_entry_button.style.display = "none";
});

get_cancel_button.addEventListener('click', (event) =>
{
    event.preventDefault();
    get_modal_container.style.display = "none";
    add_entry_button.style.display = "block";
});

get_add_button.addEventListener('click', (event) => 
{
    event.preventDefault();

    let xhr = new XMLHttpRequest()
    xhr.open("POST", "Home.php", true)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send
    (
        "user_info_details_id=" + encodeURIComponent(localStorage.getItem("user_info_details_id")) +
        "&site_name=" + encodeURIComponent(get_site_name.value) + 
        "&username=" + encodeURIComponent(get_username.value) +
        "&password=" + encodeURIComponent(get_password.value) + 
        "&note=" + encodeURIComponent(get_note.value) + 
        "&link=" + encodeURIComponent(get_link.value)
    );

    alert("The saved info is saved!")
});