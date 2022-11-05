////////////////// GLOBAL VARIABLES /////////////////

const display = document.querySelector("#display");
let displayValue = "0";

let currentOp = null;

let first = "0";
let last = null;

let equalPressed = 0;

////////////////////// FUNCTIONS ////////////////////

// MATH OPERATIONS //

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

function eq() {
  displayValue = operate(
    window[currentOp],
    parseFloat(first),
    parseFloat(last)
  ).toString();
  print();
  return displayValue;
}

function unary() {
  displayValue = operateUn(window[currentOp], parseFloat(first)).toString();
  print();
  last = null;
  currentOp = null;
  first = displayValue;
  equalPressed = 1;
}

// OPERATE FUNCTION //

function operate(operator, a, b) {
  return operator(a, b);
}

function operateUn(operator, a) {
  return operator(a);
}

// DISPLAY //

function print() {
  if (displayValue.length > 9) {
    display.textContent = "Too long";
    clear();
    return;
  }
  display.textContent = displayValue;
}

// CLEAR FUNCTION //

function clear() {
  displayValue = "0";
  first = "0";
  last = null;
  currentOp = null;
}

//////////////////// BUTTON CLICKS //////////////////////

// CLEAR //

const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
  clear();
  print();
});

// NUMBERS //

const nums = document.querySelectorAll(".number");

nums.forEach((num) => {
  num.addEventListener("click", () => {
    if (displayValue.length < 9) {
      if (displayValue == "0" || equalPressed) {
        displayValue = num.textContent;
        equalPressed = 0;
      } else {
        displayValue += num.textContent;
      }
      print();
    }

    if (!currentOp) {
      first = displayValue;
    } else {
      last = displayValue;
    }
  });
});

// POINT //

const point = document.querySelector("#point");

point.addEventListener("click", () => {});

// OPERATIONS //

const ops = document.querySelectorAll(".operation");

ops.forEach((op) => {
  op.addEventListener("click", () => {
    if (!currentOp) {
      currentOp = op.id;
    } else {
      first = eq();
      if (currentOp != op.id) {
        currentOp = op.id;
      }
      last = null;
    }
    if (currentOp == "neg" || currentOp == "sqrt") {
      unary();
    }
    displayValue = "0";
  });
});

// EQUALS //

const equals = document.querySelector("#equals");

equals.addEventListener("click", () => {
  if (currentOp) {
    eq();
    last = null;
    currentOp = null;
    first = displayValue;
    equalPressed = 1;
  }
});

/////////////////////////////////////////////////////////////////
