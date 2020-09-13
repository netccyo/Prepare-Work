let array1 = []; //new Array(); array1은 Array의 객체
//array.push(값); 그러면 자동으로 0번부터 순차적으로 add된다.
Array1.push(1); //array1.add()
Array1.push("문자열");
Array1.push(true);
Array1.push(3.1434);
Array1.push(array1); //(4) [1, "문자열", true, 3.1434] 출력
//php에서 배열릐 값 추가
// array1[] = "추가할 내용";
//undefined = empty
array1[4];
console.log(array1);
array1[6]=10; //이렇게 하게 되면 [5]번 방의 값이 지정이 안 되어있으면
//[5]는 자동적으로 undefined룰 갖게된다.

delete array1[1]; //index 1번째 방에 데이터값 삭제
console.log(array1); //(4) [1,empty,true, 3.1434]
console.log(array1[1]); //undefined
//그러면 실질적으로 값을 삭제하는 방법은
//array에 있는 splic() 기능을 사용하면 된다
let moveVal = array1.splice(1,2); //1번 인덱스 부터 2번 인덱스 값을 꺼내온 것
console.log(array1);//하면 1과 2가 사라진 것을 알 수 있다.
console.log(moveVal);//저장함

function multiply() {
    console.log(arguments); //매게인자가 배열형식으로 들어가있다
    //arguments는 함수 안에서만 쓸 수 있는 객체이다
    if(arguments.length==3) {
        console.log(arguments[0]*arguments[1]*arguments[2]);
    }
    else if(arguments.length==2) {
        console.log(arguments[0]*arguments[1]);
    }
    else if(arguments.length==1) {
        console.log(arguments[0]);
    }
}
multiply(20,30);
multiply(20,30,60);

let person = {"name" : "박연미", "age" : 10};
console.log(person.name);// === person["name"];


//overring(toString할 떄 사용) 기존에 존재하는 매서드의 내용을 바꿔주는 것 
//다 같은 것을 바꿔주는 것

//오버로딩 같은 이름 다른 인자 값

//객체는 속성과 값으로 구성