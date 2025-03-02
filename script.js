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
const enterButton = document.getElementById('enter-button');
const screen = document.querySelector('.screen');
let currentNumber = "";
let previousNumber = "";

previousNumber = currentNumber;
currentNumber = "";

const choices = ["+", "-", "x", "/", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

/*Allows "+" to appear on screen*/
additionButton.addEventListener("click", () =>{
    operation = "+";
    screen.textContent += "+";
    previousNumber = currentNumber;
    currentNumber = "";
});

subtractionButton.addEventListener("click", () =>{
    screen.textContent += "-";
});

multiplicationButton.addEventListener("click", () =>{
    screen.textContent += "x";
});

divisionButton.addEventListener("click", () =>{
    screen.textContent += "/";
});

oneButton.addEventListener("click", () =>{
    screen.textContent += "1";
});

twoButton.addEventListener("click", () =>{
    screen.textContent += "2";
});

threeButton.addEventListener("click", () =>{
    screen.textContent += "3";
});

fourButton.addEventListener("click", () =>{
    screen.textContent += "4";
});

fiveButton.addEventListener("click", () =>{
    screen.textContent += "5";
});

sixButton.addEventListener("click", () =>{
    screen.textContent += "6";
});

sevenButton.addEventListener("click", () =>{
    screen.textContent += "7";
});

eightButton.addEventListener("click", () =>{
    screen.textContent += "8";
});

nineButton.addEventListener("click", () =>{
    screen.textContent += "9";
});

clearButton.addEventListener("click", () =>{
    screen.textContent = " ";
});

let result = 0

enterButton.addEventListener("click", () =>{
    if (operation === "+") {result = Number(previousNumber) + Number(currentNumber)};
    document.getElementById("display").textContent = result;
});