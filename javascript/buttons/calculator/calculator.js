let input = document.getElementById("input");

function text(value){
    input.value = input.value + value
}

function compute(){
    try {
        input.value = eval(input.value);
    }
    catch(e) {
        input.value = 'Ошибка!!!'
    }
}

function delet(){
    input.value = ''
}

function cekKey1(event) {
    let keys = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    if (keys.includes(event.key) == false) {
        event.preventDefault();
    }
}
input.addEventListener('keypress', cekKey1)
