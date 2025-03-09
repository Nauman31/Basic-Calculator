let currentInput = "";
let operator = "";
let previousInput = "";

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput === "") return;
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    if (currentInput === "" || previousInput === "") return;
    let result;
    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = "";
    previousInput = "";
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    operator = "";
    previousInput = "";
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = currentInput;
}