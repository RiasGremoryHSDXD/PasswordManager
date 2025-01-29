let get_entry_button = document.getElementById("entry_button")
let get_modal_container = document.getElementById("modal_container")
let get_cancel_button = document.getElementById("cancel_button")
let get_submit_button = document.getElementById("add_button")
let get_site_name = document.getElementById("save_site_name");
let get_username = document.getElementById("save_username");
let get_password = document.getElementById("save_password");
let get_note = document.getElementById("save_note")
let get_link = document.getElementById("save_link");
let get_site_error = document.getElementById("site_error")
let get_username_error = document.getElementById('username_error')
let get_password_error = document.getElementById('password_error')
let get_close_success_modal_button = document.getElementById('close_success_modal')
let get_success_modal = document.getElementById('success_modal')

get_entry_button.addEventListener('click', () => 
{
    get_modal_container.style.display = "block"
})

get_cancel_button.addEventListener('click', (event) => 
{
    event.preventDefault()
    get_modal_container.style.display = "none"
})

get_submit_button.addEventListener('click', (event) =>
{
    event.preventDefault()
    let valid = true;

    if(get_site_name.value.trim() === "")
    {
        get_site_name.style.border = "solid 2px red" 
        get_site_error.style.display = "block"
        valid = false;
    }

    if(get_username.value.trim() === "")
    {
        get_username.style.border = "solid 2px red"
        get_username_error.style.display = "block"
        valid = false;
    }

    if(get_password.value.trim() === "")
    {
        get_password.style.border = "solid 2px red"
        get_password_error.style.display = "block"
        valid = false;
    }

    get_site_name.addEventListener('input', () => 
    {
            get_site_name.style.border = "solid 1px #ced4da"
            get_site_error.style.display = "none"
    })

    get_username.addEventListener('input', () =>
    {
        get_username.style.border = "solid 1px #ced4da"
        get_username_error.style.display = "none";
    })

    get_password.addEventListener('input', () =>
    {
        get_password.style.border = "solid 1px #ced4da"
        get_password_error.style.display = "none"
    })

    if(!valid)
    {
        return
    }
    
    submitEntry()
});


async function submitEntry()
{
    try
    {
        let response = await fetch('AddEntry.php',
            {
                method:'POST',
                headers:
                {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams
                (
                    {
                        user_info_details_id: localStorage.getItem("user_info_details_id"),
                        site_name: get_site_name.value,
                        username: get_username.value,
                        password: get_password.value,
                        note: get_note.value,
                        link: get_link.value
                    }
                )
            }
        )

        let data = await response.text()
        console.log("Success:", data);

    }catch(error)
    {
        alert(error)
    }
}