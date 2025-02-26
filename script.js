const additionButton = document.getElementById('addition-button');
const subtractionButton = document.getElementById('subtraction-button');
const multiplicationButton = document.getElementById('multiplication-button');
const divisionButton = document.getElementById('division-button');
const screen = document.querySelector('.screen');

const choices = ["+", "-", "x", "/", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

additionButton.addEventListener("click", () =>{
    screen.textContent = "+";
});

/*Allows the "+" to appear larger on my screen*/
additionButton.addEventListener('click', function() {
    screen.innerHTML = "<span class='large'>+</span>";
});

subtractionButton.addEventListener("click", () =>{
    screen.textContent = "-";
});

subtractionButton.addEventListener("click", () =>{
    screen.innerHTML = "<span class='large'>-</span>";
});

multiplicationButton.addEventListener("click", () =>{
    screen.textContent = "x";
});

multiplicationButton.addEventListener("click", () =>{
    screen.innerHTML = "<span class='large'>x</span>";
})