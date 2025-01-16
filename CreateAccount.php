<?php
    if($_SERVER['REQUEST_METHOD'] === 'POST')
    {
        $firstName = $_POST['first_name'];
        $middleName = $_POST['middle_name'];
        $lastName = $_POST['last_name'];
        $email = $_POST['email'];
        $userName = $_POST['user_name'];
        $password = $_POST['password'];

        $connection = new mysqli('localhost', 'root', '', 'database_password_manager');

        if($connection->connect_error)
        {
            die('Connection failed: ' . $connection->connect_error);
        }

        $insert_value_in_user_infoTable = $connection->prepare("INSERT INTO user_info (firstname, middlename, lastname, email) VALUES (?, ?, ?, ?)");
        $insert_value_in_user_infoTable->bind_param("ssss", $firstName, $middleName, $lastName, $email);

        if($insert_value_in_user_infoTable->execute())
        {
            $user_details_id = $connection->insert_id;

            $insert_value_in_credentialsTable = $connection->prepare("INSERT INTO credentials (log_in_username, log_in_password) VALUES (?, ?)");
            $insert_value_in_credentialsTable->bind_param("ss", $userName, $password);

            if($insert_value_in_credentialsTable->execute())
            {
                $credentials_id = $connection->insert_id;

                $insert_value_in_user_info_detailsTable = $connection->prepare("INSERT INTO user_info_details (user_info_id, credentials_id) VALUES (?, ?)");
                $insert_value_in_user_info_detailsTable->bind_param("ss", $user_details_id, $credentials_id);
                $insert_value_in_user_info_detailsTable->execute();
            }
        }
    }
    else
    {
        http_response_code(405);
        echo "Invalid request method!";
    }
?>