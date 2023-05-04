let button = document.querySelector('.btn');
const colors = ['btn-warning', 'btn-success', 'btn-danger'];
let currentIndex = 0;

button.addEventListener('click', function() {
    var button = document.getElementById('myButton');
    if (button.classList.contains("btn-danger")) {
        button.classList.remove("btn-danger");
        button.classList.add("btn-warning");
    } else if (button.classList.contains("btn-warning")) {
        button.classList.remove("btn-warning");
        button.classList.add("btn-success");
    } else if (button.classList.contains("btn-success")) {
        button.classList.remove("btn-success");
        button.classList.add("btn-danger");
    }
})

function changeColor() {
    var button = document.getElementById('myButton');
    if (button.classList.contains("btn-danger")) {
        button.classList.remove("btn-danger");
        button.classList.add("btn-warning");
    } else if (button.classList.contains("btn-warning")) {
        button.classList.remove("btn-warning");
        button.classList.add("btn-success");
    } else if (button.classList.contains("btn-success")) {
        button.classList.remove("btn-success");
        button.classList.add("btn-danger");
    }
}
setInterval(changeColor, 10000);
