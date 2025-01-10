<?php
    if($_SERVER['REQUEST_METHOD'] === 'POST')
    {
        $firstName = $_POST['first_name'];
        $middleName = $_POST['middle_name'];
        $lastName = $_POST['last_name'];
        $email = $_POST['email'];
        $userName = $_POST['user_name'];
        $password = $_POST['password'];

        $connection = new mysqli('localhost', 'root', '', 'password_manager_db');

        if($connection->connect_error)
        {
            die('Connection failed: ' . $connection->connect_error);
        }

        $stmt = $connection->prepare("INSERT INTO user_info (firstname, middlename, lastname, email) VALUES (?, ?, ?, ?)");
        $user_info_log_in_credentials = $connection->prepare("INSERT INTO credentials (log_in_username, log_in_password) VALUES (?, ?)");
        $stmt->bind_param("ssss", $firstName, $middleName, $lastName, $email);
        $user_info_log_in_credentials->bind_param("ss", $userName, $password);

        if($stmt->execute())
        {
            echo "New record created successfully!";
            $user_info_log_in_credentials->execute();
        }
        else
        {
            echo "Error: " . $stmt->error;
        }
    }
    else
    {
        http_response_code(405);
        echo "Invalid request method!";
    }
?>