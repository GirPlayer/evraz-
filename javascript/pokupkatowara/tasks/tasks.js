let title = document.getElementById('title')
let description = document.getElementById('description')
let button = document.getElementById('button')
let list = document.getElementById('list')
let count = 0
let searchI = document.getElementById('search')
let bSearch = document.getElementById('bSearch')
let bReset = document.getElementById('bReset')
let taskList = ''


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
    taskList = list.innerHTML
    title.value = ""
    description.value = ""
}

button.addEventListener('click', addTask)


function searchTask(){
    let tasks = document.getElementsByClassName('task')

    for (let task of tasks){
        let titles = task.getElementsByClassName('task-title')
        let title = titles[0]

        if (title.innerText.includes(searchI.value) == false){
            task.remove()
        }
    }
}
bSearch.addEventListener('click', searchTask)

function resetTasks(){
    list.innerHTML = taskList
}
bReset.addEventListener('click', resetTasks)