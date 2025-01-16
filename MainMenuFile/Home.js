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
    console.log("Log in Username: " + localStorage.getItem("username"));
    console.log("Log in Password: " + localStorage.getItem("password"));
    console.log("User ID: " + localStorage.getItem("user_id"))
    console.log("Table user_info_details_id: " + localStorage.setItem("user_info_details_id"))
    console.log("Site Name: " + get_site_name.value);
    console.log("Username: " + get_username.value);
    console.log("Password: " + get_password.value);
    console.log("Note: " + get_note.value)
    console.log("Link: " + get_link.value)
});