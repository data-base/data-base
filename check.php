<?php
session_start();
if(!isset($_SESSION['userid'])) {
    die('please <a href="login.php">Log in</a>');
}
else{
<a href="main.html>go to page</a>
}
?>
