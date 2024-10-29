// Get the display element
const display = document.getElementById('display');

// Variables to store values
let currentInput = '';
let operator = '';
let previousInput = '';

// Function to update the display
function updateDisplay(value) {
  display.value = value;
}

// Function to handle number and operator clicks
function handleButtonClick(e) {
  const clickedValue = e.target.value;

  // If clear button is clicked
  if (clickedValue === 'C') {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay(''); // Reset the display
    return;
  }

  // If the equal sign is clicked, perform the calculation
  if (clickedValue === '=') {
    if (previousInput && operator && currentInput) {
      const result = calculate(previousInput, currentInput, operator);
      updateDisplay(result);
      currentInput = result;
      operator = '';
      previousInput = '';
    }
    return;
  }

  // If an operator button is clicked, save the current input and operator
  if (['+', '-', '*', '/'].includes(clickedValue)) {
    operator = clickedValue;
    previousInput = currentInput;
    currentInput = '';
    return;
  }

  // Append the clicked number to the current input
  currentInput += clickedValue;
  updateDisplay(currentInput);
}

// Function to perform the calculation
function calculate(first, second, operator) {
  const firstNumber = parseFloat(first);
  const secondNumber = parseFloat(second);

  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      return firstNumber / secondNumber;
    default:
      return secondNumber;
  }
}

// Attach click event listeners to all buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});
