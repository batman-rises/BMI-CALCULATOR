function countBMI() {
    const weightInt = document.getElementById('weight').value;
    const weight = parseFloat(weightInt);

    const heightInt = document.getElementById('height').value;
    const height = parseFloat(heightInt);

    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        const BMI = (weight / (height * height)) * 10000;
        const roundedBMI = BMI.toFixed(2);
        document.getElementById('result').innerText = `BMI is ${roundedBMI}`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers for weight and height.';
    }
}
