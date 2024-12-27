<?php
    $username = $_POST['username'];
    $password = $_POST['password'];

    $connection = new mysqli('localhost', 'root', '', 'password_manager_db');
    if($connection->connect_error){
        die('Connection failed: ' . $connection->connect_error);
    }
    else
    {
        $stmt = $connection->prepare("INSERT INTO credentials (username, password) VALUES (?, ?)");
        $stmt->bind_param("ss", $username, $password);
        $stmt->execute();
        echo "New record created successfully";
        $stmt->close();
        $connection->close();
    }
?>