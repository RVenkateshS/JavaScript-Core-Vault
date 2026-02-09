const form = document.querySelector('form');
// console.log(form);
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const result = document.getElementById('results');

    if(height === '' || height <0 || isNaN(height)){
        result.innerHTML =  `Please enter a valid height ${height}`;
    }
    else if (weight === '' || weight <0 || isNaN(weight)) {
        result.innerHTML = `Please enter a valid weight ${weight}`; 

    }

    else {
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        // show the results
        result.innerHTML = `<span>Your BMI is ${bmi}</span>`;
    }

})
