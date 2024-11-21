document.body.style.backgroundColor = 'red'
let button = document.getElementById('buttoncolor')
function bcolor(){
    if (document.body.style.backgroundColor = 'red'){
        document.body.style.backgroundColor = 'green'
    }
    else document.body.style.backgroundColor = 'red'
}  
button.addEventListener('click', bcolor)