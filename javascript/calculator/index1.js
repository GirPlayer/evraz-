alert('Добро пожаловать в калькулятор (но только для двух чисел)')
let n1 = +prompt('Введи первое число: ')
let n2 = +prompt('Введи второе число: ')

let sl = n1 + n2
let vi = n1 - n2
let pr = n1 * n2
let ch = n1 / n2

let firstE = document.getElementById('first')
firstE.innerText = n1
let secondE = document.getElementById('second')
secondE.innerText = n2

let s = document.getElementById('summa')
s.innerText = sl
let v = document.getElementById('raznost')
v.innerText = vi
let p = document.getElementById('proizvedenie')
p.innerText = pr
let c = document.getElementById('chastnoe')
c.innerText = ch