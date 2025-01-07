export function validatingField(fields)
{
    let valid = true;

    function displayFieldError(field_id, message_error)
    {
        const field = document.getElementById(field_id);
        const error_message = document.getElementById(message_error);

        field.style.border = "solid 2px red";
        error_message.style.fontSize = "80%";
        error_message.style.display = "block";

        field.addEventListener('input',() =>
        {
            field.style.border = "solid 2px #ced4da";
            error_message.style.display = "none";
        });

        fields.forEach((field) =>
        {
            const value = document.getElementById(field.id).value;

            if (value === "")
            {
                displayFieldError(field.id, field.message);
                valid = false;
            }
        });
    }
    return valid;
}

