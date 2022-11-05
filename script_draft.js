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
  return b != 0 ? a / b : "Math Error";
}

function neg(a) {
  return -a;
}

function sqrt(a) {
  return Math.sqrt(a);
}

////////////////////////////////////////////////////////

function operate(operator, a, b) {
  first = 0;
  last = 0;
  return operator(a, b);
}

function operate(operator, a) {
  first = null;
  last = null;
  return operator(a);
}

////////////////////////////////////////////////////////

let displayValue = 0;
let display = document.querySelector("#display");

const buttons = document.querySelectorAll(".button");

let first = null;
let last = null;
let fn = null;

/////////////////////////////////////////////////////////

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
    } else if (list.contains("operation")) {
      fn = window[button.id];
      if (first == null) {
        first = displayValue;
        if (list.contains("unary")) {
          first = displayValue = operate(fn, first);
          display.textContent = displayValue;
        } else {
          displayValue = 0;
        }
      } else {
        last = displayValue;
        first = displayValue = operate(fn, first, last);
        display.textContent = displayValue;
      }
      displayValue = 0;
      fn = null;
    }
  });
});
