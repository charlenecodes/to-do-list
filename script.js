/* create a light mode; when a button is clicked, use event listeners to make the page dark and the opposite when it is clicked again */

let input = document.querySelector("#input");
let toDo = document.querySelector("#additional-tasks");
let addButton = document.querySelector("#button");
let empty = document.querySelector("#empty-task")

function addTask() { 
    let li = document.createElement("li");
    li.classList.add("li-style")
    li.innerText = input.value;
    toDo.appendChild(li) /* the order of lines 9-12 are very important, otherwise this will not be functioning correctly */
    li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
    })
    li.addEventListener("dblclick", function () {
        toDo.removeChild(li);
    })
    input.value = ""; /* clears the input field after pressing enter */
    empty.classList = "hide"
}

addButton.addEventListener("click", addTask)
