const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get input values
  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const resultElement = document.querySelector(".result");

  // Validate inputs
  if (!height || !weight || height <= 0 || weight <= 0) {
    resultElement.innerHTML = "Please enter valid positive numbers for height and weight.";
    return;
  }

  // Convert height to meters
  const heightInMeters = height / 100;

  // Calculate BMI
  const bmi = weight / (heightInMeters * heightInMeters);

  // Display result with 2 decimal places
  alert( `Your BMI is: ${bmi.toFixed(2)}`);
});
