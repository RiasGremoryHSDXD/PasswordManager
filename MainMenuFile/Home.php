<?php
    if($_SERVER['REQUEST_METHOD'] === 'POST')
    {
        $user_info_details_id = $_POST['user_info_details_id'];
        $site_name = $_POST['site_name'];
        $user_name = $_POST['username'];
        $password = $_POST['password'];
        $note = $_POST['note'];
        $link = $_POST['link'];

        $connection = new mysqli('localhost', 'root', '', 'database_password_manager');

        if($connection->connect_error)
        {
            die('Connection failed: ' . $connection->connect_error);
        }

        $insert_value_in_user_save_password_managerTable = $connection->prepare("INSERT INTO user_save_password_manager (user_info_details_id, site_name, site_url, site_username, site_password, notes) VALUES (?, ?, ?, ?, ?, ?)");
        $insert_value_in_user_save_password_managerTable->bind_param('ssssss', $user_info_details_id, $site_name, $link, $user_name, $password, $note);
        $insert_value_in_user_save_password_managerTable->execute();
    }
    else
    {
        http_response_code(405);
        echo "Invalid request method!";
    }
?>