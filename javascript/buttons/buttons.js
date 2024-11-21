// Функция
function sayHello() {
    alert('Привет')
}
sayHello()


let button = document.getElementById('button')

button.addEventListener('click', sayHello)

function sumOfNumbers() {
    let input1 = document.getElementById('first')
    let firstNumber = input1.value

    let input2 = document.getElementById('second')
    let secondNumber = input2.value

    let sum = +firstNumber + +secondNumber

    let span  = document.getElementById('sum')
    span.innerText = sum
}


let sumButton = document.getElementById('sum-button')
sumButton.addEventListener('click', sumOfNumbers)

let body = document.body

body.style.backgroundColor ='pink' 

console.log(body)