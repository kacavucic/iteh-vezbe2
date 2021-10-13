<?php
$host = "localhost";
$db = "kolokvijumi";
$user = "root";
$password = "";

$conn = new mysqli($host, $user, $password, $db);
if ($conn->connect_errno) {
    exit("Neuspešna konekcija: greška> " . $conn->connect_error . ", err kod>" . $conn->connect_errno);
}