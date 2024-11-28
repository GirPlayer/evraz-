let d1 = document.getElementById("d1");
let b1 = document.getElementById("b1");
let t1 = document.getElementById("t1");
let clearBtn = document.getElementById("clear");
function newcolor1(){
    t1.innerText = d1.value
}
b1.addEventListener("click", newcolor1);

let d2 = document.getElementById("d2");
let b2 = document.getElementById("b2");
let t2 = document.getElementById("t2");
function newcolor2(){
    t2.innerText = d2.value
}
b2.addEventListener("click", newcolor2);

let d3 = document.getElementById("d3");
let b3 = document.getElementById("b3");
let t3 = document.getElementById("t3");
function newcolor3(){
    t3.innerText = d3.value
}
b3.addEventListener("click", newcolor3);
function clearAll() {
    d1.value = ''
    d2.value = ''
    d3.value = ''
    t1.innerText = ''
    t2.innerText = ''
    t3.innerText = ''
}
clearBtn.addEventListener('click', clearAll)