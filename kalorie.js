const mealAmountSelect = document.querySelector(".mealsnumber");
let tabsAmount = 0;
var currentTab = 0;
function initProject() {
  generateMealAmountOptions();
}

function generateMealAmountOptions() {
  for (let i = 0; i < 10; i++) {
    let mealOption = document.createElement("option");
    mealOption.textContent = i + 1;
    mealOption.value = i + 1;
    mealAmountSelect.appendChild(mealOption);
  }
}
function addIngredientToMeal() {
  console.log("d");
}
function generateTabs(amount) {
  tabsAmount = amount;
  const regForm = document.querySelector("#regForm");
  for (let i = 0; i < tabsAmount; i++) {
    const mealContainer = document.createElement("div");
    mealContainer.classList.add("tab");
    const mealHeader = document.createElement("h3");
    mealHeader.textContent = `Posiłek nr ${i + 1}`;
    const mealSearchInput = document.createElement("input");
    mealSearchInput.placeholder = "Wybierz składnik";
    const mealAddBtn = document.createElement("button");
    mealAddBtn.textContent = "Dodaj";
    mealAddBtn.addEventListener("click", addIngredientToMeal);

    mealContainer.appendChild(mealHeader);
    mealContainer.appendChild(mealSearchInput);
    mealContainer.appendChild(mealAddBtn);
    regForm.appendChild(mealContainer);
  }
}

function formGenerate() {
  const mealAmount =
    mealAmountSelect.options[mealAmountSelect.selectedIndex].value;
  generateTabs(mealAmount);
  document.getElementById("form1").style.display = "block";
  showTab(currentTab);
}

// Current tab is set to be the first tab (0)
// Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

document.addEventListener("DOMContentLoaded", initProject);
