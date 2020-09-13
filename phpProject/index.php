<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            color:#000;
            list-style:none;
            text-decoration:none;
        }
    </style>
</head>
<body>
    <ul>
        <?php
            if(isset($_SESSION['user'])){
                $user = $_SESSION['user']->name;
                echo "<li><a href='logout.php'>로그아웃</a><li>";
            }else{
                echo "<li><a href='login.php'>로그인</a></li>";
                echo "<li><a href='register.php'>회원가입</a></li>";
            }
        ?>
        <li><a href="list.php">회원리스트</a></li>
        <li><a href="board.php">게시판</a></li>
     </ul>
</body>
</html>