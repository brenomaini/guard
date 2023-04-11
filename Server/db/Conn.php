<?php

$host = "localhost";
$user = "root";
$pass = "P@ssw0rd";
$dbname = "estoqueGran";
$port = "3306";

try {
    //realizando conexão
$conn == new PDO("mysql:host=$host;port=$port;dbname=".$dbname, $user, $pass);
} catch (\PDOException $e) {
    echo $e;
}