//상세 버튼 클릭시 -> 내용출력
let isOpen = false; //상세정보가 열려있니?

let view = document.querySelector("#view");
//<a> 태그의 객체로서 클릭 -> 이벤트가 발동! detail 보여주기
view.addEventListener("click", OpenDetail);
function OpenDetail(event) {
    let detail = document.querySelector("#detail");
    if(!isOpen) {
        detail.style.display = "block"; //상세정보 열기
        isOpen = true;
        view.innerHTML="상세 설명 닫기";
    }
    else{
        detail.style.display = "none"; //상세정보 열기
        isOpen = false;
        view.innerHTML="상세 설명 열기";
    }
    
}

let bigPic = document.querySelector("#cup");
let smallPics = document.querySelectorAll(".small");

for(let i=0;i<smallPics.length;i++) {
    smallPics[i].addEventListener("click",
    function() {
        newPic = this.src;
        bigPic.setAttribute("src", newPic);
    }
    );
}