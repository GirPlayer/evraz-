let b = document.getElementById('b')
let d = document.getElementById('d')
let t1 = document.getElementById('t1')
let t2 = document.getElementById('t2')
let t3 = document.getElementById('t3')

function textcolor1() {
    p = prompt('Введи цвет блока (Пример: Красный, Синий, Зелёный)')
    if (p == 'Красный') {
        t1.innerText = d.value
    }
    if (p == 'Синий') {
        t2.innerText = d.value
    }
    if (p == 'Зелёный') {
        t3.innerText = d.value
    }
}
b.addEventListener('click', textcolor1)



let clearBtn = document.getElementById("clear");
function clearAll() {
    d.value = ''
    t1.innerText = ''
    t2.innerText = ''
    t3.innerText = ''
}
clearBtn.addEventListener('click', clearAll)