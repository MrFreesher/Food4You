const calculateBtn = document.querySelector("#calculateBtn");
const heightInput = document.querySelector("#inputHeight");
const weightInput = document.querySelector("#inputWeight");
const bmiResult = document.querySelector("#bmiResult");
function calculateBMI(e) {
  e.preventDefault();
  const weight = weightInput.value;
  const height = heightInput.value;
  const bmi = weight / Math.pow(height, 2);
  bmiResult.textContent = `Twoje bmi to ${bmi} co oznacza ${checkBMI(bmi)}`;
}

function checkBMI(bmiValue) {
  if (bmiValue < 16) {
    return "Wygłodzenie";
  }
  if (bmiValue >= 16 && bmiValue <= 16.99) {
    return "Wychudzenie";
  }
  if (bmiValue >= 17 && bmiValue <= 18.49) {
    return "Niedowaga";
  }
  if (bmiValue >= 18.5 && bmiValue <= 24.99) {
    return "Waga prawidłowa";
  }
  if (bmiValue >= 25 && bmiValue <= 29.99) {
    return "Nadwaga";
  }
  if (bmiValue >= 30 && bmiValue <= 34.99) {
    return "I stopień nadwagi";
  }
  if (bmiValue >= 35 && bmiValue <= 39.99) {
    return "II stopień nadwagi";
  }
  if (bmiValue >= 40) {
    return "Otyłość skrajna";
  }
}

calculateBtn.addEventListener("click", calculateBMI);
