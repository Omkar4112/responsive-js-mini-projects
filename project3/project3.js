function CalculateBmi() {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
  
    const heightCm = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
  
    if (!weight || !heightCm || heightCm <= 0) {
      alert("Please enter valid weight and height!");
      return;
    }
  
    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    let category = "";
  
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    alert("Your BMI is " + bmi.toFixed(2) + " (" + category + ")");
  }
  document.addEventListener("DOMContentLoaded", function () {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    
    heightInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
    event.preventDefault(); // stop form submission or page reload
    weightInput.focus();    // move focus to weight input
    }
    });
    });
    