let button = document.getElementById("button");
let input = document.getElementById("input");
let ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function removeParent(event) {
    event.target.parentNode.remove()
}

function createListElement() {

    let button = document.createElement("button")
    button.innerHTML = "Delete"
    button.onclick = removeParent

    li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(button)

    ul.appendChild(li);
    li.addEventListener("click", toggleClassOnClick)
    input.value = ""
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement()
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement()
    }
}

function toggleClassOnClick(event) {
    event.target.classList.toggle("done")
    console.log(event);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

