/* create a light mode; when a button is clicked, use event listeners to make the page dark and the opposite when it is clicked again */

let input = document.getElementById("empty-list");
let toDo = document.getElementById("to-do");
let paragraph = document.createElement("p");
let addButton = document.getElementById("button");
let span = document.getElementById("empty-list");

function addTask() {
    toDo.appendChild(paragraph)
    paragraph.innerText = input.value;
    // input.value = ""; /* clears the input field after pressing enter */
}

addButton.addEventListener("click", addTask)
