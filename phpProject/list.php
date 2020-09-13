<?php
    session_start();

    include_once("lib.php");
    include_once("db.php");
    
    if(!isset($_SESSION['user'])){
        msgGo('로그인 후 이용가능합니다.','login.php');
        exit;
    }

    $sql = "SELECT * FROM users";
    $userList = fetchAll($db, $sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원리스트</title>
</head>
<body>
    <h1>회원리스트</h1>
    <table border='1'>
        <tr>
            <th>번호</th>
            <th>아이디</th>
            <th>이름</th>
            <th>레벨</th>
        </tr>
        <?php $i=0; foreach($userList as $user) : $i++; ?>
            <tr>
                <td><?= $i ?></td>
                <td><?= $user->id ?></td>
                <td><?= $user->name ?></td>
                <td><?= $user->level ?></td>
            </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>