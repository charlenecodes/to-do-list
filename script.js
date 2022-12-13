/* create a light mode; when a button is clicked, use event listeners to make the page dark and the opposite when it is clicked again */

let input = document.querySelector("#input");
let toDo = document.querySelector("#additional-tasks");
let addButton = document.querySelector("#button");
let empty = document.querySelector("#empty-list")

function addTask() { 
    let li = document.createElement("li");
    li.classList.add("li-style")
    li.innerText = input.value;
    toDo.appendChild(li) /* the order of lines 9-12 are very important, otherwise this will not be functioning correctly */
    input.value = ""; /* clears the input field after pressing enter */
    li.addEventListener("click", function (){
        li.style.textDecoration = "line-through";
    })
    li.addEventListener("dblclick", function (){
        toDo.removeChild(li);
    })
    empty.classList = "hide" /* not working */
}


addButton.addEventListener("click", addTask)

// create functions in order to remove unwanted tasks and mark completed tasks

// function remove() {
//     toDo.removeChild(li);
// }

// function completed() {
//     li.style.textDecoration = "line-through";
// }

// function addTask(event) { 
//     let li = document.createElement("li");
//     li.classList.add("li-style")
//     li.innerText = input.value;
//     toDo.appendChild(li)
//     li.addEventListener("click", completed)
//     li.addEventListener("dblclick", remove)
//     empty.classList = "hide";
// }

// OR WITH THIS COMBINATION WITH THE REMOVE/COMPLETED FUNCTIONS OUTSIDE THE ADDTASK FUNCTION?

// li.addEventListener("dblclick", remove)
// li.addEventListener("click", completed)