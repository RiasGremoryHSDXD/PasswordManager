<?php
    include('database.php');

    if($_SERVER['REQUEST_METHOD'] == 'POST')
    {
        header('Content-Type: application/json');

        $username = $_POST['username'];
        $password = $_POST['password'];

        $sql_code = "SELECT log_in_username, log_in_password FROM credentials";
        $result = mysqli_query($conn, $sql_code);

        $isAuthenticated = false;

        while ($row = mysqli_fetch_assoc($result)) {
            if ($username === $row['log_in_username'] && $password === $row['log_in_password']) {
                $isAuthenticated = true;
                break;
            }
        }

        echo json_encode($isAuthenticated); // Output true or false
        exit();
    }
?>
