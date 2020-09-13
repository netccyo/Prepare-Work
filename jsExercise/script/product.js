let isOpen = false;

let view = document.querySelector("#view");

view.addEventListener("click", OpenDetail);

function OpenDetail(event){
    let detail = document.querySelector("#detail");
    if(!isOpen){
        detail.style.display = "block";
        isOpen = true;
        view.innerHTML = '상세 설명 닫기';
    }else{
        detail.style.display = "none";
        isOpen = false;
        view.innerHTML = '상세 설명 보기';
    }
}

let bigpic = document.querySelector("#cup");
let smailpics = document.querySelectorAll(".small");

for(i = 0; i < smailpics.length; i++){
    smailpics[i].addEventListener("click", function(){
        newpic = this.src;
        bigpic.setAttribute("src", newpic);
    });
}