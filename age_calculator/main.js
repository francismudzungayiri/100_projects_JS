

let birth_date = document.querySelector('input');
let btn = document.querySelector('button');
let years_old = document.querySelector('.number')

let today = new Date();

btn.addEventListener('click',()=>{
    
    const bd = new Date(birth_date.value)
    let today_year = today.getFullYear();
    let birthYear = bd.getFullYear();
    

    age = Number(today_year) - Number(birthYear);
    years_old.textContent = age
});