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