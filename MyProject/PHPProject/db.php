<?php
session_start();

//$slq = sql 실행(execute)문
//$db = PDO의 객체

$host = "127.0.0.1";//=localhost
$dbname = "test";
$charset = "utf8mb4";
$user = "root";
$pass = "1234";
$str = "mysql:host={$host}; dbname={$dbname}; charset={$charset}";
$options=[
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    //mysql오류를 화면으로 보여줌
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
    //
    //
];
$db = new PDO($str,$user,$pass, $options);

function fetchAll($db, $sql, $param=[]) {
    $q = $db->prepare($sql);
    $q -> execute($param);
    return $q->fetchAll();
}
function fetch($db, $sql, $param=[]) {
    $q = $db->prepare($sql);
    $q -> execute($param);
    return $q->fetch();
}
function execute($db, $sql, $param=[]) {
    $q = $db -> prepare($sql);
    return $q -> execute($param);
}

define("HOME", __DIR__);
// var_dump($db);