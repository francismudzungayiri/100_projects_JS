

let birth_date = document.querySelector('input');
let btn = document.querySelector('button');
let years_old = document.querySelector('.number')

let today = new Date();

btn.addEventListener('click',()=>{
    
    const bd = new Date(birth_date.value)
    today_year = today.getFullYear();
    birthYear = bd.getFullYear();
    console.log(today_year, birthYear)

    age = Number(today_year) - Number(birthYear);
    years_old.textContent = age
});