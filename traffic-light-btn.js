let button = document.querySelector('.btn');
const colors = ['btn-warning', 'btn-success', 'btn-danger'];

function changeColor() {
    let button = document.getElementById('myButton');
    let currentClass = button.classList[1];
    let currentIndex = colors.indexOf(currentClass);
    let nextIndex = (currentIndex + 1) % 3;
    button.classList.remove(currentClass);
    button.classList.add(colors[nextIndex]);  
}

button.addEventListener('click', function() {
    changeColor();
})

setInterval(changeColor, 10000);
