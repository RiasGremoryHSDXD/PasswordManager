<?php

    include('database_connection.php');
    $json_data = file_get_contents("php://input");
    $decoded_data = json_decode($json_data, true);

    $query = "SELECT * FROM user_save_password_manager";
    $result = mysqli_query($connection, $query);

    // Initialize an array to store the results
    $site = array();

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) 
        {
            if((int)$row['user_info_details_id'] == (int)$decoded_data['user_id'])
            {
                $site[] = $row; // Store each row in the array
            }
        }
    }

    echo json_encode($site);
?>