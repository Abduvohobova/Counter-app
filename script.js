let counter = 0;
const num = document.querySelector(".num");
const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
let sun = document.querySelector('#sun');
let moon = document.querySelector('#moon');
let container = document.querySelector('.container');
let h1 = document.querySelector('h1');

moon.addEventListener('click', () => {
container.style.background = 'black';
moon.style.display = 'none';
sun.style.display = 'block';
h1.style.textShadow = '0 0 3px pink, 0 0 5px skyblue';
num.style.boxShadow = '0px 0px 50px 0px violet';
increment.style.boxShadow = '0px 0px 20px 0px darkblue inset';
reset.style.boxShadow = '0px 0px 20px 0px green inset';
h1.style.color = 'aqua';
});
sun.addEventListener('click', () => {
    container.style.background = 'white';
    moon.style.display = 'block';
    sun.style.display = 'none';
    h1.style.textShadow = 'none';
    btn1.style.boxShadow = 'none';
    btn2.style.boxShadow = 'none';
    btn3.style.boxShadow = 'none';
    btn4.style.boxShadow = 'none';
    num.style.boxShadow = 'none';
    increment.style.boxShadow = 'none';
    reset.style.boxShadow = 'none';
    h1.style.color = 'darkblue';

});
increment.addEventListener("click", () => {
    counter++;
    num.innerText = counter;
    if(num.innerText >= 33){
        btn1.style.background = "aquamarine";
    }
    if(num.innerText == 66){
        btn2.style.background = "aquamarine";
    }
    if(num.innerText == 99){
        btn3.style.background = "aquamarine";
    }
    if(num.innerText == 100){
        btn4.style.background = "aquamarine";
    }
});

btn1.addEventListener('click', () => {
    counter++;
    num.innerText = counter;
    if (num.innerText == 33){
        btn1.style.background = "aquamarine";
    }
    
});
btn2.addEventListener('click', () => {
    counter++;
    num.innerText = counter;
    if (num.innerText == 66){
        btn2.style.background = "aquamarine";
        
    }
});
btn3.addEventListener('click', () => {
    counter++;
    num.innerText = counter;
    if (num.innerText == 99){
        btn3.style.background = "aquamarine";
       
    }
});
btn4.addEventListener('click', () => {
    counter++;
    num.innerText = counter;
    if (num.innerText == 100){
        btn4.style.background = "aquamarine";
       
    }
});

reset.addEventListener("click", () => {
    counter = 0;
    num.innerText = counter;
    btn1.style.background = "none";
    btn2.style.background = "none";
    btn3.style.background = "none";
    btn4.style.background = "none";
});