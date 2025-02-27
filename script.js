const additionButton = document.getElementById('addition-button');
const subtractionButton = document.getElementById('subtraction-button');
const multiplicationButton = document.getElementById('multiplication-button');
const divisionButton = document.getElementById('division-button');
const oneButton = document.getElementById('one-button');
const twoButton = document.getElementById('two-button');
const threeButton = document.getElementById('three-button');
const fourButton = document.getElementById('four-button');
const fiveButton = document.getElementById('five-button');
const sixButton = document.getElementById('six-button');
const sevenButton = document.getElementById('seven-button');
const eightButton = document.getElementById('eight-button');
const nineButton = document.getElementById('nine-button');
const clearButton = document.getElementById('clear-button');
const screen = document.querySelector('.screen');

const choices = ["+", "-", "x", "/", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

/*Allows "+" to appear on screen and appear larger*/
additionButton.addEventListener("click", () =>{
    screen.textContent = "+";
    screen.innerHTML = "<span class='large'>+</span>";
});

subtractionButton.addEventListener("click", () =>{
    screen.textContent = "-";
    screen.innerHTML = "<span class='large'>-</span>";
});

multiplicationButton.addEventListener("click", () =>{
    screen.textContent = "x";
    screen.innerHTML = "<span class='large'>x</span>";
});

divisionButton.addEventListener("click", () =>{
    screen.textContent = "/";
    screen.innerHTML = "<span class='large'>/</span>";
});

oneButton.addEventListener("click", () =>{
    screen.textContent = "1";
    screen.innerHTML = "<span class='large'>1</span>";
});

twoButton.addEventListener("click", () =>{
    screen.textContent = "2";
    screen.innerHTML = "<span class='large'>2</span>";
});

threeButton.addEventListener("click", () =>{
    screen.textContent = "3";
    screen.innerHTML = "<span class='large'>3</span>";
});

fourButton.addEventListener("click", () =>{
    screen.textContent = "4";
    screen.innerHTML = "<span class='large'>4</span>";
});

fiveButton.addEventListener("click", () =>{
    screen.textContent = "5";
    screen.innerHTML = "<span class='large'>5</span>";
});

sixButton.addEventListener("click", () =>{
    screen.textContent = "6";
    screen.innerHTML = "<span class='large'>6</span>";
});

sevenButton.addEventListener("click", () =>{
    screen.textContent = "7";
    screen.innerHTML = "<span class='large'>7</span>";
});

eightButton.addEventListener("click", () =>{
    screen.textContent = "8";
    screen.innerHTML = "<span class='large'>8</span>";
});

nineButton.addEventListener("click", () =>{
    screen.textContent = "9";
    screen.innerHTML = "<span class='large'>9</span>";
});

clearButton.addEventListener("click", () =>{
    screen.textContent = " ";
});