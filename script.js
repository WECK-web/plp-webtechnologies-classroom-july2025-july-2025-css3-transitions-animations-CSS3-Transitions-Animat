/* ================================
   Part 2: JavaScript Functions
   ================================ */

// Global variable (global scope)
let globalNumber = 7;

/**
 * Function with parameter and return value
 * Demonstrates local scope (result variable is local)
 */
function calculateSquare(num) {
  let result = num * num; // local variable
  return result;
}

/**
 * Function to trigger a CSS animation on an element
 * Demonstrates reusability of functions
 */
function triggerAnimation(elementId, animationName, duration = "1s") {
  let element = document.getElementById(elementId);
  element.style.animation = `${animationName} ${duration} infinite`;

  // Reset after 2 seconds (animation removed)
  setTimeout(() => {
    element.style.animation = "none";
  }, 2000);
}

/* ================================
   Part 3: Combining CSS + JS
   ================================ */

// Event listener for the Calculate button
document.getElementById("calcBtn").addEventListener("click", function () {
  // Call function with global variable
  let squared = calculateSquare(globalNumber);

  // Update the page with return value
  document.getElementById("calcResult").textContent =
    `The square of ${globalNumber} is ${squared}`;

  // Trigger CSS keyframe animation via JS
  triggerAnimation("animatedBox", "pulse", "1s");
});

// Bonus: Animate box on click as well
document.getElementById("animatedBox").addEventListener("click", function () {
  triggerAnimation("animatedBox", "pulse", "0.7s");
});
