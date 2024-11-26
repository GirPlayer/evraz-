let button1 = document.getElementById("b1");
let a1 = document.getElementById('d1')
let b1 = document.getElementById('span1')
function number1(){
    b1.innerText = a1.value
}
button1.addEventListener('click', number1);

let button2 = document.getElementById("b2");
let a2 = document.getElementById('d2')
let b2 = document.getElementById('span2')
function number2(){
    b2.innerText = a2.value
}
button2.addEventListener('click', number2);

let button3 = document.getElementById("b3");
let a3 = document.getElementById('d3')
let b3 = document.getElementById('span3')
function number3(){
    b3.innerText = a3.value
}
button3.addEventListener('click', number3);