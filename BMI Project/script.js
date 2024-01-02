function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (weight !== "" && height !== "") {
        var bmi = (weight / (height * height)).toFixed(2);
        var category = interpretBMI(bmi);

        document.getElementById("result").innerHTML = `Your BMI is: ${bmi}<br>You are in the ${category} category.`;
    } else {
        document.getElementById("result").innerHTML = "Please enter both weight and height.";
    }
}

function interpretBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
