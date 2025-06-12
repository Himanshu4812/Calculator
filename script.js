let equalPressed = 0;
let buttonInput = document.querySelectorAll(".button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

// Clear input when page loads
window.onload = () => {
  input.value = "";
};

// Add click event to all buttons
buttonInput.forEach((buttonClass) => {
  buttonClass.addEventListener("click", () => {
    if (equalPressed === 1) {
      input.value = "";                                        // Clear previous result
      equalPressed = 0;
    }
    input.value += buttonClass.value;
  });
});

// Calculate result on clicking "="
equal.addEventListener("click", () => {
  equalPressed = 1;
  let inputValue = input.value;
  try {
    let solution = eval(inputValue);
    if (Number.isNaN(solution) || !Number.isFinite(solution)) {
      throw new Error("Invalid mathematical expression");
    }
    input.value = Number.isInteger(solution) ? solution : solution.toFixed(2);
  } catch (error) {
    alert(error.message);
  }
});

// Clear button
clear.addEventListener("click", () => {
  input.value = "";
});

// Erase last character
erase.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});
