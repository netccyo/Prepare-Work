let nameD = document.querySelector(".js-name");

function printName(value) {
    nameD.innerHTML=""; //form 사라짐
    let span = document.createElement("span");
    span.className = "name__text";
    span.innerHTML = `Hi! ${value}`;
    nameD.appendChild(span);
}

function handleSubmit(event) {
    //event -> submit
    event.preventDefault(); //기본 이벤트를 막다
    //submit 버튼이 작동 X
    let form = event.target; //이벤트를 가지고 있는 애
    let input = form.querySelector("input");
    localStorage.setItem("name", input.value);
    printName(input.value); //index.html 에 뿌려줄 이름
}

function makeInput() {
    //클라이언트에게 이름 값 받아오는 함수
    let input = document.createElement("input");
    //<input>
    input.placeholder = "이름을 입력해주세요";
    //<input placeholder="이름을 입력해 주세요">
    input.type="text";
    input.className="name__input";
    //<input type="text" placeholder="이름을 입력해 주세요">

    let form = document.createElement("form");
    //<form></form>
    form.addEventListener("submit", handleSubmit);
    // hadleSubmit -> 기본 submit 막고 lacalStorage에 값 저장하고 printName호출
    //<div class="js-name"></div>
    form.appendChild(input);
    //<form><input type="text" placeholder="이름을 입력해 주세요"></form>
    nameD.appendChild(form);
    //<div class="js-name"><form><input type="text" placeholder="이름을 입력해 주세요"></form></div>
}

function loadName() {
    let name = localStorage.getItem("name");
    if(name === null) {
        //== -> 값이 같으면 타입이 달라도 상관 ㄴ | === -> 자료형 타입까지
        makeInput();
    }
    else {
        printName(name);
    }
}

function init() {
    loadName();
}
init();