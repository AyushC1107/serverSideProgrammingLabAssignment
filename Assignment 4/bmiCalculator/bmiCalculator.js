function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
  
    if (!weight || !height) {
      document.getElementById("bmiResult").innerText = "Please enter both weight and height.";
      return;
    }
  
    let bmi = weight / (height * height);
    document.getElementById("bmiResult").innerText = `Your BMI is ${bmi.toFixed(2)}`;
  
    if (bmi < 18.5) {
      document.getElementById("bmiResult").innerText += " (Underweight)";
    } else if (bmi < 24.9) {
      document.getElementById("bmiResult").innerText += " (Normal weight)";
    } else if (bmi < 29.9) {
      document.getElementById("bmiResult").innerText += " (Overweight)";
    } else {
      document.getElementById("bmiResult").innerText += " (Obese)";
    }
  }
  