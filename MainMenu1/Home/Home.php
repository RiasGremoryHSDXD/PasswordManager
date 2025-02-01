<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="./../NavigationBar/NavigationBar.css">
    <link rel="stylesheet" href="./../button.css">
    <link rel="stylesheet" href="Home.css">
    <link rel="stylesheet" href="ShowData.css">
</head>

<body>
    <?php
    include('./../NavigationBar/NavigationBar.php');
    ?>

    <div class="home_container"> 

        <?php
            echo 
            "
            <div class='site_name'>
                <div id='site_name'>
                </diV>
            </div>
            ";
        ?>

        <div class="add_entry_container">
            <button id="entry_button" class="entry_button"> + Add Entry</button>
        </div>

        <div id="modal_container" class="modal_container">
            <form class="modal">
                <input type="text" id="save_site_name" class="text_field_input" placeholder="Site">
                <label id="site_error" style="display: none; color: red;">Site name is required</label>

                <input type="text" id="save_username" class="text_field_input" placeholder="Username">
                <label id="username_error" style="display: none; color: red;">Username is required</label>

                <input type="text" id="save_password" class="text_field_input" placeholder="Password">
                <label id="password_error" style="display: none; color: red;">Password is required</label>

                <input type="text" id="save_note" class="text_field_input" placeholder="Note (Optional)">
                <input type="text" id="save_link" class="text_field_input" placeholder="Link (Optional)">
                <div class="btn_container">
                    <button id="cancel_button" class="btn_attributes">Cancel</button>
                    <button id="add_button" class="btn_attributes">Add</button>
                </div>
            </form>
        </div>

        <div id="success_modal" class="success_modal">
            <div class="success_content">
                <p id="add_entry_message">The saved info is saved!</p>
                <button id="close_success_modal">Close</button>
            </div>
        </div>
    </div>

</body>
    <script src="Home.js"></script>
</html>