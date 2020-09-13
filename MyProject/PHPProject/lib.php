<?php
function dump($value) {
    echo "<pre>";
    var_dump($value);
    echo "</pre>";
}

function msgGo($msg, $url) {
    echo "<script>";
    echo "alert('${msg}');";
    echo "location.href = '${url}';";
    echo "</script>";
}

function msgBa($msg) {
    echo "<script>";
    echo "alert('${msg}');";
    echo "history.go(-1);";
    echo "</script>";
}

function checkLogin() {
    if(!isset($_SESSION['user'])) {
        msgBa("로그인 후 이용가능");
        exit;
    }
}