let b = document.getElementById('inputText')
let a = document.getElementById('text')
function text(){
    let t = prompt('Введи любой текст')
    a.innerText = t
}
b.addEventListener('click', text)