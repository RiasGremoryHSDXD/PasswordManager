<?php
    $db_server = "localhost";
    $root = "root";
    $password = "";
    $db_name = "password_manager_db";
    $connection = "";

    try
    {
        $conn = mysqli_connect($db_server, $root, $password, $db_name);
    }
    catch(Exception $e)
    {
        die("Connection failed: ". $e->getMessage());
    }

?>