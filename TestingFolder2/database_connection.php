<?php
    $db_server = "localhost";
    $db_user = "root"; // Corrected from `$root` to `$db_user`
    $db_password = "";
    $db_name = "database_password_manager";

    $connection = mysqli_connect($db_server, $db_user, $db_password, $db_name);

    // Check connection
    if (!$connection) {
        die("Connection failed: " . mysqli_connect_error());
    }
?>
