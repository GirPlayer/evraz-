let b = document.getElementById("inputText");
let t1 = document.getElementById("input");
let t2 = document.getElementById("text");

function newtext(){
    t2.innerText = t1.value
}
b.addEventListener("click", newtext);