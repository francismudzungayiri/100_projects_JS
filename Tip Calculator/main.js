let bill_amount = document.querySelector('#bill');
let percentage = document.querySelector('#tip');
let total = document.querySelector('#total');


document.querySelector('button').addEventListener('click', ()=>{
    let bill = Number(bill_amount.value);
    let perc = Number(percentage.value);

    let tip = bill + (bill * (perc/100));
    total.textContent = tip;
});