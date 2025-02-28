

document.querySelector('button').addEventListener('click', ()=>{
    height = Number(document.querySelector('#height').value);
    weight = Number(document.querySelector('#weight').value);
    bm1_calc = document.querySelector('#bmi');
    condition_span = document.querySelector('#condition');

    condition = ''

    //CALCULATING BMI VALUE 
    bmi = (weight / (height * height)) * 10000;
    bm1_calc.textContent = bmi;

    if(bmi < 18.5){
        condition = 'Undewight';
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        condition = 'Normal Weight';
    }
    else if(bmi >= 25.0 && bmi <= 29.9){
        condition = 'Overweight';
    }
    else{
        condition = 'Obese'
    }

    condition_span.innerHTML = condition;

})