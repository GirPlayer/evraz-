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
    n1.innerText = i1.value
    n2.innerText = i2.value
    n3.innerText = i3.value
    n4.innerText = i4.value
    n5.innerText = i5.value
}
b.addEventListener("click", addTowar)

let towar = document.getElementById('towar');
function delet(){
    elements.innerText = ""
    elements.value = ""
}
b2.addEventListener("click", delet)

let button = document.getElementById('b');
let elements = document.getElementById('elements');
let elementNumber = 0;

function appendElement() {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add('element');

    const nameDiv = document.createElement('div');
    nameDiv.innerHTML = `<span>Название товара: ${name.value}</span>`;
    mainDiv.append(nameDiv)

    const priceDiv = document.createElement('div');
    priceDiv.innerHTML = `<span>Цена: ${price.value}</span>`;
    mainDiv.append(priceDiv)

    const colvoDiv = document.createElement('div');
    colvoDiv.innerHTML = `<span>Количество товара: ${colvo.value}</span>`;
    mainDiv.append(colvoDiv)

    const artDiv = document.createElement('div');
    artDiv.innerHTML = `<span>Артикул: ${art.value}</span>`;
    mainDiv.append(artDiv)

    const opisDiv = document.createElement('div');
    opisDiv.innerHTML = `<span>Описание товара: ${opis.value}</span>`;
    mainDiv.append(opisDiv)

    elements.append(mainDiv)
}

b.addEventListener('click', appendElement)
