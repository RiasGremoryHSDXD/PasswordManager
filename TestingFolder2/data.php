<?php 

    // Read the raw input
    $json_data = file_get_contents("php://input");
    $decoded_data = json_decode($json_data, true);
    
    // Check if user_id exists
    if (isset($decoded_data['user_id'])) {
        echo json_encode(["user_id" => (int)$decoded_data['user_id'] + 1]); // Send only the user_id value
    } else {
        echo json_encode(["error" => "No user_id received"]);
    }
    
?>