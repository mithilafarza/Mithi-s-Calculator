let display = document.getElementById('display');
let currentInput = '';

function appendValue(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(currentInput);
        currentInput = display.value;
    } catch {
        display.value = 'Error';
        currentInput = '';
    }
}
