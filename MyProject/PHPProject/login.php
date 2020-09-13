<?php
    require_once ("db.php");
    require_once  ("lib.php");
    require_once  ("header.php");
?>
<section class="mt-4"><div class="row my-5">
    <div class="col-10 offset-1"> <h1>로그인</h1></div></div>
<div class="row"><div class="col-10 offset-1">
    <form action="/login_process.php" method="post">
        <div class="form-group">
            <label for="userid">아이디</label>
            <input type="text" name="userid" id="userid"
                 class="form-control"></div>
            <div class="form-group">
            <label for="password">비밀번호</label>
            <input type="password" name="password" id="password" 
                class="form-control"> </div>
            <button type="submit" class="btn btn-outline-info">
            로그인</button> </form></div></div></section>
<?php
    include ("footer.php");
?>