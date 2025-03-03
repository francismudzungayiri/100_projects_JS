let toggle = document.querySelector('.toggle');
let body = document.querySelector(('body'));
let btn = document.querySelector('.toggle-button');


document.addEventListener('DOMContentLoaded', (event)=>{
       // Check local storage for theme preference
       const savedTheme = localStorage.getItem('theme');
       if (savedTheme) {
           toggle.classList.add(savedTheme);
           body.style.backgroundColor = localStorage.getItem('bodyColor');
           btn.style.backgroundColor = localStorage.getItem('btnColor');
       }
       
});


function Animated_Toggle(){
    toggle.classList.toggle('active');

    if(toggle.classList.contains('active')){
        body.style.backgroundColor = '#1B1833';
        btn.style.backgroundColor = '#1B1833';
        
        localStorage.setItem('theme','active');
        localStorage.setItem('bodyColor','#1B1833')
        localStorage.setItem('btnColor','#1B1833')
        
    }
    else{
        body.style.backgroundColor = '#F8FAFC';
        btn.style.backgroundColor = '#D9EAFD';

        localStorage.setItem('bodyColor','#F8FAFC')
        localStorage.setItem('btnColor','#D9EAFD')
        localStorage.removeItem('theme')
    }
}



