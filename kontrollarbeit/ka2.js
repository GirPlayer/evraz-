let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let count = 0
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");
let history = document.getElementById("history");


function Count6(){
    let number = document.getElementById("number");
    count = count - 10
    number.innerHTML = count;
    let answer = document.getElementById("answer");
    if (count % 2 == 0){
        answer.innerHTML = "Да";
    }
    else {
        answer.innerHTML = 'Нет';
    }
    countT = String(count)
    historyT = history.innerText
    history.innerText = historyT + countT
}
b6.addEventListener("click", Count6)

function Count7(){
    let number = document.getElementById("number");
    count = count - 1
    number.innerHTML = count;
    let answer = document.getElementById("answer");
    if (count % 2 == 0){
        answer.innerHTML = "Да";
    }
    else {
        answer.innerHTML = 'Нет';
    }
    countT = String(count)
    historyT = history.innerText
    history.innerText = historyT + countT
}
b7.addEventListener("click", Count7)

function Count8(){
    let number = document.getElementById("number");
    count = count + 1
    number.innerHTML = count;
    let answer = document.getElementById("answer");
    if (count % 2 == 0){
        answer.innerHTML = "Да";
    }
    else {
        answer.innerHTML = 'Нет';
    }
    countT = String(count)
    historyT = history.innerText
    history.innerText = historyT + countT
}
b8.addEventListener("click", Count8)

function Count9(){
    let number = document.getElementById("number");
    count = count + 10
    number.innerHTML = count;
    let answer = document.getElementById("answer");
    if (count % 2 == 0){
        answer.innerHTML = "Да";
    }
    else {
        answer.innerHTML = 'Нет';
    }
    countT = String(count)
    historyT = history.innerText
    history.innerText = historyT + countT
}
b9.addEventListener("click", Count9)






function backColor1(){
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white';
}
b1.addEventListener('click', backColor1);

function backColor2(){
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black';
}
b2.addEventListener('click', backColor2);

function backColor3(){
    document.body.style.backgroundColor = 'gray'
    document.body.style.color = 'black';
}
b3.addEventListener('click', backColor3);

function backColor4(){
    document.body.style.backgroundColor = 'goldenrod'
    document.body.style.color = 'black';
}
b4.addEventListener('click', backColor4);

function backColor5(){
    document.body.style.backgroundColor = 'blue'
    document.body.style.color = 'greenyellow';
}
b5.addEventListener('click', backColor5);

