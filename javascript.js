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
// input variables
let num1 = 0;
let num2 = 0;
let operator = '';

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
