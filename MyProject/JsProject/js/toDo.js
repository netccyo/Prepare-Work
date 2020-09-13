const form = document.querySelector(".js-to-do"),
input = document.querySelector(".js-add-to-do"),
ul = document.querySelector(".js-list");

form.addEventListener("submit", handleSubmit);
let todoList = [];


function handleSubmit (event) {
    event.preventDefault();
    let value = input.value;
    input.value = "";
    addTodos(value);
}

function saveToLS() {
    //local storage 저장
    let stringTodoL = JSON.stringify(todoList);
    localStorage.setItem("todoLS", stringTodoL);
}

function saveTodo(input) {
    let todoID = todoList.length;
    let todoObj = {
        id : todoID + 1,
        value : input
    };

    todoList[todoID] = todoObj;
    // todoList.push(todoObj);

    saveToLS();
}

function addTodos(text) {
    let li = document.createElement("li");
    li.className = "toDo";
    li.id = todoList.length + 1;
    let label = document.createElement("label");
    label.innerHTML = text;
    li.appendChild(label);
    ul.appendChild(li);
    saveTodo(text);
}

function loadToDos() {
    let loadTodos = localStorage.getItem("todoLS");
    if(loadTodos !== null) {
        let getLStodo = JSON.parse(loadTodos);
        getLStodo.forEach(
            function(toDo) {
                addTodos(toDo.value);
            });
    }
}
function init() {
    loadToDos();

}
init();