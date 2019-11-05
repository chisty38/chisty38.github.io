var weight, age, height, bmr, calIn, cmInch, kgLb;

function checkGender() {

    if (document.getElementById('male').checked == true)
        bmr += 5;
    else if (document.getElementById('female').checked)
        bmr -= 160;
}

function calculateCalIntake() {

    switch (document.getElementById('activity').value) {
        case "None (No activity at all / stay home)":
            calIn = bmr;
            break;
        case "I am sendentary (little or no exercise)":
            calIn = bmr * 1.2;
            break;
        case "I am lightly active (light exercize or sports 1-3 days per week)":
            calIn = bmr * 1.375;
            break;
        case "I am moderately active (moderate exercise or sports 3-5 days per week)":
            calIn = bmr * 1.55;
            break;
        case "I am very active (hard exercise or sports 5-7 days per week)":
            calIn = bmr * 1.725;
            break;
        case "I am super active (very hard exercise or sports and a physical job or 2x training)":
            calIn = bmr * 1.9;
            break;
    }
}

function calculateBmr() {   
    
    cmInch = document.getElementById('cm-inch').value;
    kgLb = document.getElementById('kg-lb').value;
    
    if ((document.getElementById('age').value == 0) || (document.getElementById('age').value == "")) 
    {
      alert("Please enter a figure in the 'age' field"); return false; 
      } else {
      age = parseInt(document.getElementById('age').value);
      }
      if ((document.getElementById('height').value== 0) || (document.getElementById('height').value== "")) {
      alert("Please enter a figure in the 'height ' field"); return false; 
      } else {
      height = parseInt(document.getElementById('height').value);
      }
      if ((document.getElementById('weight').value== 0) || (document.getElementById('weight').value== "")) {
      alert("Please enter a figure in the 'weight' field"); return false; 
      } else {
      weight = parseInt(document.getElementById('weight').value);
      }

    if (cmInch == 'By Centimeters (cm)' && kgLb == 'By Kilograms (kg)')
        bmr = 10 * weight + 6.25 * height - 5 * age;
    else if (cmInch == 'By Inches (in)' && kgLb == 'By Kilograms (kg)')
        bmr = 10 * weight + 6.25 * 2.54 * height - 5 * age;
    else if (cmInch == 'By Inches (in)' && kgLb == 'By Pounds (lb)')
        bmr = 10 * 0.453592 * weight + 6.25 * 2.54 * height - 5 * age;
    else if (cmInch == 'By Centimeters (cm)' && kgLb == 'By Pounds (lb)')
        bmr = 10 * 0.453592 * weight + 6.25 * height - 5 * age;

    checkGender();

    document.getElementById('resultBmr').innerHTML = bmr;

    calculateCalIntake();

    document.getElementById('resultCalIn').innerHTML = calIn;

}
document.getElementById("btn").addEventListner("click", calculateBmr, false);

