function createAccount() {
    window.location.href = "CreateAccount.html";
}

function proceedCreateAccount(event)
{
    
    event.preventDefault();

    const fields = [
        {id:"firstName", error_1:"first_name_error", error_2:"first_name_error_2"},
        {id:"middleName", error_1:"middle_name_error", error_2:"middle_name_error_2"},
        {id:"lastName", error_1:"last_name_error", error_2:"last_name_error_2"},
        {id:"email", error_1:"email_error", error_2:"email_error_2"},
        {id:"username", error_1:"username_error", error_2:"username_error_2"},
        {id:"password", error_1:"password_error" , error_2:"password_error_2"},
    ]

    function display_field(field_id, error_1)
    {
        const field_name =  document.getElementById(field_id);
        const error_message_1 = document.getElementById(error_1);
        field_name.style.border = "solid 2px red";

        error_message_1.style.fontSize = "80%";
        error_message_1.style.display = "block";

        field_name.addEventListener('input',() =>
        {
            field_name.style.border = "solid 2px #ced4da";
            error_message_1.style.display = "none";
        })
        
    }


    function display_input_error(field_id, error_2)
    {
        const field_name =  document.getElementById(field_id);
        const error_message_2 = document.getElementById(error_2);
        field_name.style.border = "solid 2px red";

        error_message_2.style.fontSize = "80%";
        error_message_2.style.display = "block";

        field_name.addEventListener('input',() =>
        {
            field_name.style.border = "solid 2px #ced4da";
            error_message_2.style.display = "none";
        })
    }

    let valid = true;

    fields.forEach((field) => {
        const value = document.getElementById(field.id).value;
        if (value === "" && field.id !== "middleName") 
        {
            display_field(field.id, field.error_1);
            valid = false;
        }
        else if(field.id === "middleName" && value.length > 0 && !user_input_letter_valid(value))
        {
            console.log("Middle name value: " + value);
            console.log("Middle name value: " + value.length);
            console.log(field.id + "middle name is invalid");
            display_input_error(field.id, field.error_2);
            valid = false;
        }
        else if(!user_input_letter_valid(value) &&  field.id !== "middleName" && field.id !== "email" && field.id !== "username" && field.id !== "password") 
        {
            console.log(field.id + " is invalid");
            display_input_error(field.id, field.error_2);
            valid = false;
        }
        else if(field.id === "email" && !user_input_email_valid(value) && value.length > 0)
        {
            console.log(field.id + " is invalid");
            display_input_error(field.id, field.error_2);
            valid = false;
        }  
        else
        {
            document.getElementById(field.id).style.border = "solid 2px #ced4da";
            document.getElementById(field.error_1).style.display = "none";
        }
    })

    if (!valid) {
        return;
    }
}


function user_input_letter_valid(value)
{
    const letter = /^[A-Za-z\s]+$/;
    return value.match(letter);
}

function user_input_email_valid(value)
{
    const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return value.match(email);
}

document.getElementById('createAccountForm').addEventListener('submit', proceedCreateAccount);