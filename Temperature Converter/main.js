const celc = document.querySelector('#celcius');
const fahren = document.querySelector('#fahrenheit');
const kelv = document.querySelector('#kelvin')


celc.addEventListener('change', ()=>{
    let celcius = Number(celc.value);

    let fahrenheit = (celcius * (9/5)) + 32;
    fahren.value = fahrenheit.toFixed(3);

    let kelvin = celcius + 273.15;
    kelv.value = kelvin.toFixed(3);
});

fahren.addEventListener('change', ()=>{
    let fahreni = Number(fahren.value);

    let celcius = (fahreni - 32) * (5/9);
    celc.value = celcius.toFixed(3);
    
    let kelvin = ((fahreni - 32) * (5/9)) + 273.15;
    kelv.value = kelvin.toFixed(3);
});

kelv.addEventListener('change', ()=>{
    let kelviny = Number(kelv.value);

    let celcius = kelviny - 273.15;
    celc.value = celcius.toFixed(3);

    let fahreny = (kelviny - 273.15) * 1.8 + 32
    fahren.value = fahreny.toFixed(3); 
})
