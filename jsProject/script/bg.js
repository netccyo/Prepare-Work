let body = document.querySelector("body");
let imgCnt = 6;
let imgNum = Math.ceil((Math.random() * imgCnt));

function createBGI(imgNum){
    let image = new Image();
    image.src = `images/${imgNum}.jpg`;
    body.style.backgroundImage = `url(${image.src})`;
}

function init(){
    createBGI(imgNum);
}

init();