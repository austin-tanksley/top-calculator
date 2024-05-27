const btnNum = document.querySelectorAll('.btn-num');
const btnOps = document.querySelectorAll('.btn-operator');
const btnClear = document.querySelector('.btn-clear')
const display = document.querySelector('.displayContent');


// input variables
let num1 = '';
let num2 = '';
let operator = '';

let operateEmpty = true;

//output
let displayContent = '';

//declare main operator functions
function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

//create function that calls operator functions
function operate(num1,num2,operator) {
    if (operator == 'add'){
        return add(num1, num2);
    }
    else if (operator == 'subtract') {
        return subtract(num1,num2);
    }
    else if (operator == 'multiply') {
       return multiply(num1, num2);
    }
    else if (operator == 'divide') {
        return divide(num1, num2);
    }
}
function updateDisplay() {
    display.textContent = displayContent
}
function populateDisplay(digit){
    displayContent = displayContent + String(digit);
    updateDisplay();
}
function clearDisplay(){
    displayContent ='';
    updateDisplay();
    
}
//when number button is clicked, if operaterator hasnt been taken yet, add digit to num1, if operator is in place then, add digit to num2
function addDigit(digit) {
    if (operateEmpty == true){
        num1 = num1.concat(digit);
    }
    else if (operateEmpty == false) {
        num2 = num2.concat(digit);
    }
}

btnNum.forEach((button)=> {
    button.addEventListener('click', () => {
        const buttonValue = button.getAttribute('data-num');
        addDigit(buttonValue);
        populateDisplay(buttonValue);

    })
})

btnClear.addEventListener('click',()=>{
    clearDisplay();
    num1 = '';
    num2 ='';
    operator = '';
    operateEmpty = true;
})

