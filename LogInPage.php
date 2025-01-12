<?php
    include("database.php");

    $sql_code = "SELECT * FROM credentials"; // Query to fetch all data from the credentials table
    $result = mysqli_query($conn, $sql_code); // Execute the query

    
    while($row = mysqli_fetch_assoc($result))
    {
        echo "Username: " . $row['log_in_username'] . "<br>";
        echo "Password: " . $row['log_in_password'] . "<br>";
    }
   
    // Close the connection after use
    mysqli_close($conn);
?>
