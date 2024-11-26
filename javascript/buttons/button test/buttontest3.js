let btext = document.getElementById('buttonT')
function buttonText(){
    let newtext = document.getElementById('buttonT')
    if (newtext.innerText == 'Текст кнопки'){
        newtext.innerText = 'Новый текст'
    }
    else{
        newtext.innerText = 'Текст кнопки'
    }
}
btext.addEventListener('click', buttonText)