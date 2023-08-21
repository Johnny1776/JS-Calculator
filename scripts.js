const display = document.getElementById("display");
let currentInput = "";
let currentOperator = "";
let firstOperand = "";

document.querySelector('.buttons').addEventListener('click', (event) => {
        const value = event.target.getAttribute('data-value');
        const action = event.target.getAttribute('data-action');

        if (value) {
            if (['+', '-', '*', '/'].includes(value)) { // Check if the value is an operator
                if (firstOperand) {
                    firstOperand = calculate(firstOperand, currentInput, currentOperator);
                    display.value = firstOperand;
                    currentInput = "";
                } else {
                    firstOperand = currentInput;
                    currentInput = "";
                }
                currentOperator = value;
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        } else if (action) {
            switch (action) {
                case 'clear':
                    currentInput = "";
                    firstOperand = "";
                    currentOperator = "";
                    display.value = "";
                    break;
                case 'calculate':
                    firstOperand = calculate(firstOperand, currentInput, currentOperator);
                    display.value = firstOperand;
                    currentInput = "";
                    currentOperator = "";
                    break;
                default:
                    if (firstOperand) {
                        firstOperand = calculate(firstOperand, currentInput, currentOperator);
                        display.value = firstOperand;
                        currentInput = "";
                    } else {
                        firstOperand = action;
                        currentInput = "";
                    }
                    currentOperator = action;
                    break;
            }
        }
});

function calculate(operand1, operand2, operator) {
    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);

    switch (operator) {
        case '+': return operand1 + operand2;
        case '-': return operand1 - operand2;
        case '*': return operand1 * operand2;
        case '/': return operand1 / operand2;
        default: return operand2;
    }
}
