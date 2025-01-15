let add_entry_button = document.getElementById("add_entry")
let get_modal_container = document.getElementById("modal_container");
let get_cancel_button = document.getElementById("cancel_button");

add_entry_button.addEventListener('click', () =>
{
    get_modal_container.style.display = "block";
    add_entry_button.style.display = "none";
});

get_cancel_button.addEventListener('click', () =>
{
    get_modal_container.style.display = "none";
    add_entry_button.style.display = "block";
})