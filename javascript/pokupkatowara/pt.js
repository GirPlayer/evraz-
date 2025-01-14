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
let b3 = document.getElementById('b3')
let ctowarov = document.getElementById('ctowarov')
let ctowarov1 = 0
let searchI = document.getElementById('search')
let bSearch = document.getElementById('bSearch')
let bReset = document.getElementById('bReset')
let taskList = ''


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
    ctowarov.innerHTML = 0
    ctowarov1 = ctowarov1 - ctowarov1
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
    nameDiv.classList.add('nameDiv')
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

    const bd = document.createElement('button')
    bd.innerHTML = 'Удалить'
    mainDiv.append(bd);

    function buttond(){
        mainDiv.innerHTML = ""
        ctowarov1 = ctowarov1 - 1
        ctowarov.innerHTML = ctowarov1
    }
    bd.addEventListener('click', buttond)

    ctowarov1 = ctowarov1 + 1
    ctowarov.innerHTML = ctowarov1

    elements.append(mainDiv)
    taskList = elements.innerHTML
}
b.addEventListener('click', appendElement)


function deleteForm(){
    name.value = ""
    price.value = ""
    colvo.value = ""
    art.value = ""
    opis.value = ""
}
b3.addEventListener('click', deleteForm)

function searchTask(){
    let tasks = document.getElementsByClassName('task')

    for (let task of tasks){
        let titles = task.getElementsByClassName('nameDiv')
        let title = titles[0]

        if (title.innerText.includes(searchI.value) == false){
            mainDiv.remove()
        }
    }
}
bSearch.addEventListener('click', searchTask)

// function resetTasks(){
//     list.innerHTML = taskList
// }
// bReset.addEventListener('click', resetTasks)


function searchT(){
    let tasks = document.getElementsByClassName('element')

    for (let task of tasks){
        let titles = task.getElementsByClassName('nameDiv')
        let title = titles[0]

        if (title.innerText.includes(searchI.value) == false){
            mainDiv.remove()
        }
    }
}
bSearch.addEventListener('click', searchT)




