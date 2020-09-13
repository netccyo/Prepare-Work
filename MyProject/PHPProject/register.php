<?php
    include_once ("db.php");
    include_once ("lib.php");
    include_once ("header.php");
    
?>

<section class="mt-4">
    <div class="row my-5">
        <div class="col-10 offset-1">
            <h1>회원 가입</h1>
        </div>
    </div>

    <div class="row">
        <div class="col-10 offset-1">
            <form action="/register_process.php" method="post">
                <!-- 부트스트랩의 폼컨트롤은 라벨과 폼이 한개로 셋트 -->
                <div class="form-group">
                    <label for="userid">아이디</label>
                    <input type="text" name="userid" id="userid" class="form-control">
                </div>
                <div class="form-group">
                    <label for="username">이름</label>
                    <input type="text" name="username" id="username" class="form-control">
                </div>
                <div class="form-group">
                    <label for="password">비밀번호</label>
                    <input type="password" name="password" id="password" class="form-control">
                </div>
                <div class="form-group">
                    <label for="passwordc">비밀번호 확인</label>
                    <input type="password" name="passwordc" id="passwordc" class="form-control">
                </div>
                <button type="submit" class="btn btn-primary">회원가입</button>
            </form>
        </div>
    </div>
    
</section>

<?php
    include ("footer.php");
?>
