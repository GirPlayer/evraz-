let b = document.getElementById('inputText')
function newtext(){
    let text = document.getElementById('input')
    if (text.value == "Текст 1"){
        text.value = 'Текст 2'
    }
    else {
        text.value = 'Текст 1'
    }
}
b.addEventListener('click', newtext);