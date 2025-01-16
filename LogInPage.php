<?php
    include('database.php');

    if($_SERVER['REQUEST_METHOD'] == 'POST')
    {
        header('Content-Type: application/json');

        $username = $_POST['username'];
        $password = $_POST['password'];

        $sql_code = "SELECT * FROM credentials";
        $result = mysqli_query($conn, $sql_code);

        $isAuthenticated = false;
        $user_credentials_RK = 0;
        $user_info_details_id = 0;
        $data = [
            "isAuthenticated" => $isAuthenticated,
            "user_credentials_RK" => $user_credentials_RK,
            "user_info_details_id" => $user_info_details_id
        ];

        while ($row = mysqli_fetch_assoc($result)) {
            if ($username === $row['log_in_username'] && $password === $row['log_in_password']) {
                $isAuthenticated = true;
                $data['isAuthenticated'] = true;
                $data['user_credentials_RK'] = $row['credentials_id'];

                /* 
                    This code get the value of the user_info_details_id using 
                    the credentials_id in the user_info_details table
                */ 
                $get_value_user_info_details_id = $conn->prepare("SELECT user_info_details_id FROM user_info_details WHERE credentials_id = ?");
                $get_value_user_info_details_id->bind_param('i', $row['credentials_id']);
                $get_value_user_info_details_id->execute();
                $get_value_user_info_details_id->bind_result($user_info_details_id);

                if($get_value_user_info_details_id->fetch())
                {
                    $data['user_info_details_id'] = $user_info_details_id;
                }

                break;
            }
        }
        
        echo json_encode($data); // Output true or false
        exit();
    }
?>
