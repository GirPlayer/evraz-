let b = document.getElementById('b')
let b2 = document.getElementById('b2')
let name = document.getElementById('i1')
let price = document.getElementById('i2')
let colvo = document.getElementById('i3')
let art = document.getElementById('i4')
let opis = document.getElementById('i5')
let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let n3 = document.getElementById('n3')
let n4 = document.getElementById('n4')
let n5 = document.getElementById('n5')

function addTowar(){
    n1.innerText=i1.value
    n2.innerText=i2.value
    n3.innerText=i3.value
    n4.innerText=i4.value
    n5.innerText=i5.value
}
b.addEventListener("click", addTowar)

function delet(){
    n1.innerText=""
    n2.innerText=""
    n3.innerText=""
    n4.innerText=""
    n5.innerText=""
}
b2.addEventListener("click", delet)