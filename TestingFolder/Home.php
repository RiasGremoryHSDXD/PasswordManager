<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table with database</title>
    <link rel="stylesheet" href="Home.css">
</head>
<body>
    <table>
        <tr>
            <th>site_name</th>
            <th>site_username</th>
            <th>site_password</th>
            <th>notes</th>
            <th>site_url</th>
        </tr>
    </table>

    <?php
        $conn = mysqli_connect("localhost", "root", "", "database_password_manager");

        if($conn-> connect_error)
        {
            die("Connection failed: " . $conn-> connect_error);
        }

        $sql = "SELECT site_name, site_username, site_password, notes, site_url FROM user_save_password_manager";
        $result = $conn-> query($sql);

        if($result-> num_rows > 0)
        {
            while($row = $result-> fetch_assoc())
            {
                echo "<tr><td>" . $row['site_name'] . " </td><td>" . $row['site_username'] . " </td><td>" . $row['site_password'] . " </td><td>" . $row['notes'] . " </td><td>" . $row['site_url'] . " </td></tr> <br>";
            }
            echo "</table>";

        }
        else {
            echo "0 result";
        }

        $conn->close();
    ?>
</body>
</html>