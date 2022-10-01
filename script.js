function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function neg(a) {
  return -a;
}

function sqrt(a) {
  return Math.sqrt(a);
}

function operate(operator, a, b) {
  return operator(a, b);
}

let displayValue = 0;
let display = document.querySelector("#display");

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  const list = button.classList;
  button.addEventListener("click", () => {
    if (list.contains("number")) {
      if (displayValue == 0) {
        displayValue = button.textContent;
      } else {
        displayValue += button.textContent;
      }
      display.textContent = displayValue;
    }
    // else if (list.contains("operation"))
  });
});
