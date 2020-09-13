<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입</title>
    <link rel="stylesheet" href="register.css">
</head>
<body>
    <form action="register_process.php" method="POST">
        <h1 class="title">회원가입</h1>
        <input type="text" name="id" placeholder="아이디" class="id">
        <input type="text" name="name" placeholder="이름" class="name">
        <input type="password" name="password" placeholder="비밀번호" class="password">
        <input type="password" name="passwordcheck" placeholder="비밀번호 확인" class="passwordcheck">
        <input type="submit" value="계정생성" class="register">
    </form>
</body>
</html>