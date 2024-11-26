let b = document.getElementById("buttontext");
function text(){
    let t = document.getElementById('text')
    if (t.innerText == 'Текст number 1'){
        t.innerText = 'Текст number 2'
    }
    else{
        t.innerText = 'Текст number 1'
    }
}
b.addEventListener('click', text)