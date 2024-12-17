let title = document.getElementById('title')
let description = document.getElementById('description')
let button = document.getElementById('button')
let list = document.getElementById('list')
let count = 0


function addTask(){
    let task = document.createElement('div')
    let taskTitle = document.createElement('div')
    let taskDescription = document.createElement('div')
    let buttonD = document.createElement('button')
    let number = document.createElement('div')

    function Delet() {
        task.remove()
        count = count-1
    }
    buttonD.addEventListener('click', Delet)





    taskTitle.innerHTML = `<b>Название:</b> ${ title.value}`
    taskDescription.innerHTML = `<b>Описание:</b> ${ description.value}`
    buttonD.innerHTML = 'Удалить'

    count = count + 1
    number.innerHTML = `<b>Задача №${count}</b>`


    task.classList.add('task')
    taskTitle.classList.add('task-title')
    taskDescription.classList.add('task-description')

    task.append(number ,taskTitle, taskDescription, buttonD)

    list.append(task)
    title.value = ""
    description.value = ""
}

button.addEventListener('click', addTask)