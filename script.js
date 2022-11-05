////////////////// GLOBAL VARIABLES /////////////////

const display = document.querySelector("#display");
let displayValue = "0";

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

// OPERATE FUNCTION //

function operate(operator, a, b) {
  return operator(a, b);
}

// DISPLAY //

function print() {
  display.textContent = displayValue;
}

//////////////////// BUTTON CLICKS //////////////////////

// CLEAR //

const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
  console.log(clear.textContent);
  displayValue = "0";
  print();
});

// NUMBERS //

const nums = document.querySelectorAll(".number");

nums.forEach((num) => {
  num.addEventListener("click", () => {
    console.log(num.textContent);

    if (displayValue.length < 10) {
      if (displayValue == "0") {
        displayValue = num.textContent;
      } else {
        displayValue += num.textContent;
      }
    }
    print();
  });
});

// POINT //

const point = document.querySelector("#point");

point.addEventListener("click", () => {
  console.log(point.textContent);
});

// OPERATIONS //

const ops = document.querySelectorAll(".operation");

ops.forEach((op) => {
  op.addEventListener("click", () => {
    console.log(op.textContent);
  });
});

// EQUALS //

const equals = document.querySelector("#equals");

equals.addEventListener("click", () => {
  console.log(equals.textContent);
});

/////////////////////////////////////////////////////////////////
