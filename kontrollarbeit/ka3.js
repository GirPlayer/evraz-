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
let history2 = document.getElementById("history2");
let history3 = document.getElementById("history3");
let history4 = document.getElementById("history4");
let history5 = document.getElementById("history5");
let b10 = document.getElementById("b10");

function numberPrompt(){
    p = prompt("Введи своё число")
    let number = document.getElementById("number");
    count = p
    number.innerHTML = count;
    let answer = document.getElementById("answer");
    if (count % 2 == 0){
        answer.innerHTML = "Да";
        countT = String(count)
        historyT = history.innerText
        history.innerText = historyT + countT
    }
    else {
        answer.innerHTML = 'Нет';
    }
    if (count % 3 == 0){
        answer2.innerHTML = "Да";
        countT = String(count)
        historyT2 = history2.innerText
        history2.innerText = historyT2 + countT
    }
    else {
        answer2.innerHTML = 'Нет';
    }
    if (count % 5 == 0){
        answer3.innerHTML = "Да";
        countT = String(count)
        historyT3 = history3.innerText
        history3.innerText = historyT3 + countT
    }
    else {
        answer3.innerHTML = 'Нет';
    }
    if (count % 7 == 0){
        answer4.innerHTML = "Да";
        countT = String(count)
        historyT4 = history4.innerText
        history4.innerText = historyT4 + countT
    }
    else {
        answer4.innerHTML = 'Нет';
    }
    if (count % 2 != 0 && count % 3 != 0 && count % 5 != 0 && count % 7 != 0)
        countT = String(count)
    historyT5 = history5.innerText
    history5.innerText = historyT5 + countT
}
b10.addEventListener("click", numberPrompt)

function Count6(){
    let number = document.getElementById("number");
    count = count - 10
    number.innerHTML = count;
    let answer = document.getElementById("answer");
    if (count % 2 == 0){
        answer.innerHTML = "Да";
        countT = String(count)
        historyT = history.innerText
        history.innerText = historyT + countT
    }
    else {
        answer.innerHTML = 'Нет';
    }
    if (count % 3 == 0){
        answer2.innerHTML = "Да";
        countT = String(count)
        historyT2 = history2.innerText
        history2.innerText = historyT2 + countT
    }
    else {
        answer2.innerHTML = 'Нет';
    }
    if (count % 5 == 0){
        answer3.innerHTML = "Да";
        countT = String(count)
        historyT3 = history3.innerText
        history3.innerText = historyT3 + countT
    }
    else {
        answer3.innerHTML = 'Нет';
    }
    if (count % 7 == 0){
        answer4.innerHTML = "Да";
        countT = String(count)
        historyT4 = history4.innerText
        history4.innerText = historyT4 + countT
    }
    else {
        answer4.innerHTML = 'Нет';
    }
    if (count % 2 != 0 && count % 3 != 0 && count % 5 != 0 && count % 7 != 0)
        countT = String(count)
        historyT5 = history5.innerText
        history5.innerText = historyT5 + countT
}
b6.addEventListener("click", Count6)

function Count7(){
    let number = document.getElementById("number");
    count = count - 1
    number.innerHTML = count;
    let answer = document.getElementById("answer");
    if (count % 2 == 0){
        answer.innerHTML = "Да";
        countT = String(count)
        historyT = history.innerText
        history.innerText = historyT + countT
    }
    else {
        answer.innerHTML = 'Нет';
    }
    if (count % 3 == 0){
        answer2.innerHTML = "Да";
        countT = String(count)
        historyT2 = history2.innerText
        history2.innerText = historyT2 + countT
    }
    else {
        answer2.innerHTML = 'Нет';
    }
    if (count % 5 == 0){
        answer3.innerHTML = "Да";
        countT = String(count)
        historyT3 = history3.innerText
        history3.innerText = historyT3 + countT
    }
    else {
        answer3.innerHTML = 'Нет';
    }
    if (count % 7 == 0){
        answer4.innerHTML = "Да";
        countT = String(count)
        historyT4 = history4.innerText
        history4.innerText = historyT4 + countT
    }
    else {
        answer4.innerHTML = 'Нет';
    }
    if (count % 2 != 0 && count % 3 != 0 && count % 5 != 0 && count % 7 != 0)
        countT = String(count)
        historyT5 = history5.innerText
        history5.innerText = historyT5 + countT
}
b7.addEventListener("click", Count7)

function Count8(){
    let number = document.getElementById("number");
    count = count + 1
    number.innerHTML = count;
    let answer = document.getElementById("answer");
    if (count % 2 == 0){
        answer.innerHTML = "Да";
        countT = String(count)
        historyT = history.innerText
        history.innerText = historyT + countT
    }
    else {
        answer.innerHTML = 'Нет';
    }
    if (count % 3 == 0){
        answer2.innerHTML = "Да";
        countT = String(count)
        historyT2 = history2.innerText
        history2.innerText = historyT2 + countT
    }
    else {
        answer2.innerHTML = 'Нет';
    }
    if (count % 5 == 0){
        answer3.innerHTML = "Да";
        countT = String(count)
        historyT3 = history3.innerText
        history3.innerText = historyT3 + countT
    }
    else {
        answer3.innerHTML = 'Нет';
    }
    if (count % 7 == 0){
        answer4.innerHTML = "Да";
        countT = String(count)
        historyT4 = history4.innerText
        history4.innerText = historyT4 + countT
    }
    else {
        answer4.innerHTML = 'Нет';
    }
    if (count % 2 != 0 && count % 3 != 0 && count % 5 != 0 && count % 7 != 0)
        countT = String(count)
        historyT5 = history5.innerText
        history5.innerText = historyT5 + countT
}
b8.addEventListener("click", Count8)

function Count9(){
    let number = document.getElementById("number");
    count = count + 10
    number.innerHTML = count;
    let answer = document.getElementById("answer");
    if (count % 2 == 0){
        answer.innerHTML = "Да";
        countT = String(count)
        historyT = history.innerText
        history.innerText = historyT + countT
    }
    else {
        answer.innerHTML = 'Нет';
    }
    if (count % 3 == 0){
        answer2.innerHTML = "Да";
        countT = String(count)
        historyT2 = history2.innerText
        history2.innerText = historyT2 + countT
    }
    else {
        answer2.innerHTML = 'Нет';
    }
    if (count % 5 == 0){
        answer3.innerHTML = "Да";
        countT = String(count)
        historyT3 = history3.innerText
        history3.innerText = historyT3 + countT
    }
    else {
        answer3.innerHTML = 'Нет';
    }
    if (count % 7 == 0){
        answer4.innerHTML = "Да";
        countT = String(count)
        historyT4 = history4.innerText
        history4.innerText = historyT4 + countT
    }
    else {
        answer4.innerHTML = 'Нет';
    }
    if (count % 2 != 0 && count % 3 != 0 && count % 5 != 0 && count % 7 != 0)
        countT = String(count)
        historyT5 = history5.innerText
        history5.innerText = historyT5 + countT
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

