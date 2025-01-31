<?php
    include('database_connection.php');

    // Fetch all user saved passwords
    $query = "SELECT * FROM user_save_password_manager";
    $result = mysqli_query($connection, $query);

    // Initialize an array to store the results
    $site = array();

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $site[] = $row; // Store each row in the array
        }
    }

    // Return the data as JSON
    echo json_encode($site);
?>
