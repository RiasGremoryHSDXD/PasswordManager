<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Connect to the database
    $connection = new mysqli('localhost', 'root', '', 'password_manager_db');

    // Check connection
    if ($connection->connect_error) {
        die('Connection failed: ' . $connection->connect_error);
    }

    // Prepare and execute the statement
    $stmt = $connection->prepare("INSERT INTO credentials (log_in_username, log_in_password) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $password);

    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $connection->close();
} else {
    // If the request method is not POST, show an error
    http_response_code(405); // Send HTTP 405 response code
    echo "Method Not Allowed";
}
?>
