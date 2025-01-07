function createAccount() {
    window.location.href = "CreateAccount.html";
}

function proceedCreateAccount(event)
{
    
    event.preventDefault();

    const fields = [
        {id:"firstName", message:"first_name_error"},
        {id:"middleName", message:"middle_name_error"},
        {id:"lastName", message:"last_name_error"},
        {id:"email", message:"email_error"},
        {id:"username", message:"username_error"},
        {id:"password", message:"password_error"}
    ]

    function display_field(field_id, message_id)
    {
        const field_name =  document.getElementById(field_id);
        const error_message = document.getElementById(message_id);
        field_name.style.border = "solid 2px red";
        error_message.style.fontSize = "80%";
        error_message.style.display = "block";

        field_name.addEventListener('input',() =>
        {
            field_name.style.border = "solid 2px #ced4da";
            error_message.style.display = "none";
        })
        
    }

    let valid = true;

    fields.forEach((field) => {
        const value = document.getElementById(field.id).value;
        if (value === "") 
        {
            display_field(field.id, field.message);
            valid = false;
        }   
        else
        {
            document.getElementById(field.id).style.border = "solid 2px #ced4da";
            document.getElementById(field.message).style.display = "none";
        }
    })

    if (!valid) {
        return;
    }
}

document.getElementById('createAccountForm').addEventListener('submit', proceedCreateAccount);