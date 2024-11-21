 //Bывод инфы в консоль
console.log("Hello World");

// 1. Переменные
let name = "Артём";
console.log('Имя пользователя:', name)

name ='Артём_228_1337';
console.log('Новое имя пользователя:', name);

// Константы
const age = 14;
console.log('Возраст пользователя:', age)

// age = 15
// console.log('Новый возраст:', age)

// Типы данных
let num = 12 // Целое число
let num2 = 12.11 // Десятичное число
let string = 'Строка' // Строка
let bool = true // Булевый тип (true/false)
let empty = null // Пустота (None  в Python)
let undef // Значение не задано
console.log(undef)

// 3.Преобразование типов данных
let strToNum = Number(12) //Number(12) - из строки в число
console.log(strToNum + 12)

let numToStr = String(12); //String(12) - из числа в строку
console.log(numToStr + 12)

// 4. Математические операции
console.log(2 + 2) // сложение
console.log(2 - 2) // вычитание
console.log(2 * 2) // умножение
console.log(2 / 2) // деление
console.log(2 % 2) // остаток от деления
console.log(2 ** 2) // степень

// 5. Взаимодействие с пользователем
alert('Добро пожаловать на сайт)');

let userName = prompt('Как тебя зовут?');
alert('Вас зовут ' + userName)

let userNameConfirmed = confirm('Ты уверен, что тебя зовут ' + userName + ' ?')
// alert(userNameConfirmed)

// 6. Условия
let userAge = prompt('Сколько тебе лет?')

// Получение элемента по id
let pageTitle = document.getElementById('title');
console.log(pageTitle);


if (userAge > 12) {
    alert('Можешь пользоваться этим сайтом)')
    pageTitle.innerText = 'Можешь пользоваться этим сайтом)'
}
else {
    alert('Тебе ещё рано пользоваться этим сайтом(')
    pageTitle.innerText = 'Тебе ещё рано пользоваться этим сайтом('
}

