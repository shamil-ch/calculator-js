
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
    if(b==0) {
        return "Error! Division by zero is not possible"
    }
    else {
        return a/b;
    }
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return null;
    }
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

let numButton = document.getElementsByClassName("numButton");

for (let i = 0; i < numButton.length; i++) {
    numButton[i].addEventListener("click", function() {
        if (operator === "") {
            firstNumber += this.textContent;
            updateDisplay(firstNumber);
        } else {
            secondNumber += this.textContent;
            updateDisplay(secondNumber);
        }
    });
}

let opButton = document.getElementsByClassName("opButton");
for(let i=0;i < opButton.length;i++) {
    opButton[i].addEventListener("click",function(){
        operator = this.textContent;
    });
}

let eqButton = document.getElementsByClassName("eqButton")[0];
eqButton.addEventListener("click",function(){
result = operate(operator,parseFloat(firstNumber),parseFloat(secondNumber));
updateDisplay(result);
});

let clearButton = document.getElementsByClassName("clearButton")[0];
clearButton.addEventListener("click",function(){
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
    updateDisplay("");
});


function updateDisplay(value) {
    document.getElementById('display').textContent = value;
}
