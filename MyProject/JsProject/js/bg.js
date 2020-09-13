let body = document.querySelector("body");
let imgcnt = 6;
let imgNum = Math.ceil((Math.random()*imgcnt));

function createBGI() {
    let image = new Image();//기존에 Image 태그가 없어서 객체를 바로 생성
    image.src=`img/${imgNum}.jpg`;
    body.style.backgroundImage = `url(${image.src})`;
}

function init() { //init = 초기/시작 //함수 1개당 기능은 1개씩
    let imgNum = Math.ceil((Math.random()*imgcnt));
    createBGI(imgNum);
}

init();