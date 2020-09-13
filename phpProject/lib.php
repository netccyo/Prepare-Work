<?php

function dump($value){
    echo "<pre>";
    var_dump($value);
    echo "</pre>";
}

function msgGo($msg, $url){
    echo "<script>";
    echo "alert('$msg');";
    echo "location.href='$url';";
    echo "</script>";
}

function msgBack($msg){
    echo "<script>";
    echo "alert('$msg');";
    echo "history.back()";
    echo "</script>";
}