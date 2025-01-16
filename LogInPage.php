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
        $data = [
            "isAuthenticated" => $isAuthenticated,
            "user_credentials_RK" => $user_credentials_RK
        ];

        while ($row = mysqli_fetch_assoc($result)) {
            if ($username === $row['log_in_username'] && $password === $row['log_in_password']) {
                $isAuthenticated = true;
                $data['isAuthenticated'] = true;
                $data['user_credentials_RK'] = $row['credentials_id'];
                break;
            }
        }
        
        echo json_encode($data); // Output true or false
        exit();
    }
?>
