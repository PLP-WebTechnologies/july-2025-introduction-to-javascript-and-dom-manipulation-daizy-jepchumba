// ================================
// Part 1: Basics (Variables + Conditionals)
// ================================
function checkAge() {
  let age = prompt("Enter your age:");
  age = Number(age);

  if (age >= 18) {
    document.getElementById("basics-output").textContent = "You are an adult!";
  } else {
    document.getElementById("basics-output").textContent = "You are under 18.";
  }
}

// ================================
// Part 2: Functions (Reusability)
// ================================

// Function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function to display result
function showTotal() {
  let total = calculateTotal(100, 3); // Example: 3 items at 100 each
  document.getElementById("function-output").textContent = "Total Price: " + total;
}

// ================================
// Part 3: Loops (Repetition)
// ================================
function showCountdown() {
  let list = document.getElementById("countdown-list");
  list.innerHTML = ""; // clear previous
  for (let i = 5; i > 0; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}
showCountdown(); // Run on page load

// ================================
// Part 4: DOM Manipulation
// ================================

// Change text content
function changeText() {
  document.getElementById("dom-text").textContent = "The text has been changed!";
}

// Toggle highlight class
function toggleHighlight() {
  document.getElementById("dom-text").classList.toggle("highlight");
}

// Add new element dynamically
function addNewElement() {
  let newPara = document.createElement("p");
  newPara.textContent = "I am a new paragraph added with JavaScript!";
  document.body.appendChild(newPara);
}
