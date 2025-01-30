let title = document.getElementById('title');
let description = document.getElementById('description');
let button = document.getElementById('button');
let list = document.getElementById('list');
let searchInput = document.getElementById('search');
let searchButton = document.getElementById('search-button');
let resetButton = document.getElementById('reset-button');

let new_tasks = [];

async function getTasks(){
    let response = await axios.get('https://dummyjson.com/posts')
    new_tasks = response.data.posts
    showTasks()
}

function showTasks(){
    list.innerHTML = ''
    for(const [index, new_task] of new_tasks.entries()){
        let task = document.createElement('div')
        let taskTitle = document.createElement('div')
        let taskDescription = document.createElement('div')
        let deletButton = document.createElement('button')

        async function Delet() {
            let ok = confirm(`Вы уверены, что хотите удалить зaдaчу "${ new_task.title}"?`)
            if (ok){
                let response = await axios.delete(`https://dummyjson.com/posts/${ new_task.id}`)
                let task = response.data
                if (task.isDeleted){
                    new_tasks.splice(index, 1)
                    showTasks()
                }
            }
        }
        deletButton.addEventListener('click', Delet)

        taskTitle.innerHTML = `<b>Название:</b> ${ new_task.title}`
        taskDescription.innerHTML = `<b>Описание:</b> ${ new_task.body}`
        deletButton.innerHTML = 'Удалить'

        task.classList.add('task')
        taskTitle.classList.add('task-title')
        taskDescription.classList.add('task-description')

        task.append(taskTitle, taskDescription, deletButton)

        list.append(task)
    }
}

async function addTask(){
    let response = await axios.post('https://dummyjson.com/posts/add', {
        title: title.value,
        body: description.value,
        userId: 5
    })
    let task = response.data
    if (task.id){
        new_tasks.unshift(task)
    }
    showTasks()
}
button.addEventListener('click', addTask);

async function searchTask(){
    let responce = await axios.get(`https://dummyjson.com/posts/search?q= ${ searchInput.value }`)
    new_tasks = responce.data.posts
    showTasks()
}
searchButton.addEventListener('click', searchTask);

resetButton.addEventListener('click', getTasks);

getTasks()