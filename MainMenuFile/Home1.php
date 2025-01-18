<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="MainMenu.css">
    <link rel="stylesheet" href="Home.css">
</head>
<body>
    <nav class="navigation_bar">
        <div class="navigation_option_container">
            <div class="search_bar_container">
                <input type="text" class="search_text_field" placeholder="Search...">
                <img src="./../ImageFolder/search_logo.png">
            </div>
        </div>
        <div class="navigation_option_container">
            <div class="option_menu">
                <ul>
                    <li>
                        <a href="Home.html">Home</a>
                    </li>
                    <li>
                        <a href="Setting.html">Setting</a>
                    </li>
                    <li>
                        <a href="About.html">About</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="navigation_option_container">
            <div class="profile_picture_container">
                <img class="profile_img" src="./../ImageFolder/Rias Gremory.png" alt="Profile picture">
            </div>
        </div>
    </nav>
    
    <div class="home_container_elements">
        <button id="add_entry">
            + Add Entry
        </button>
        <div id="modal_container" class="modal_container" style="display: none;">
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
    </div>

    <div id="success_modal" class="success_modal" style="display: none;">
        <div class="success_content">
            <p>The saved info is saved!</p>
            <button id="close_success_modal">Close</button>
        </div>
    </div>

    <table>
        <tr>
            <th>site_name</th>
            <th>site_username</th>
            <th>site_password</th>
            <th>notes</th>
            <th>site_url</th>
        </tr>

        <?php
        $conn = mysqli_connect("localhost", "root", "", "database_password_manager");

        if($conn-> connect_error)
        {
            die("Connection failed: " . $conn-> connect_error);
        }

        $sql = "SELECT site_name, site_username, site_password, notes, site_url FROM user_save_password_manager";
        $result = $conn-> query($sql);

        if($result-> num_rows > 0)
        {
            while($row = $result-> fetch_assoc())
            {
                echo "<tr><td>" . $row['site_name'] . " </td><td>" . $row['site_username'] . " </td><td>" . $row['site_password'] . " </td><td>" . $row['notes'] . " </td><td>" . $row['site_url'] . " </td></tr>";
            }

        }
        else {
            echo "0 result";
        }

        $conn->close();
    ?>
    </table>
</body>
<script src="Home.js"></script>
</html>