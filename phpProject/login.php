<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <form action="login_process.php" method="POST">
        <h1>로그인</h1>
        <input type="text" name="id" placeholder="아이디" class="id">
        <input type="password" name="password" placeholder="비밀번호" class="password">
        <input type="submit" value="로그인" class="login">
    </form>
</body>
</html>