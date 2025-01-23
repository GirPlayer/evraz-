let avatarI = document.getElementsByClassName('avatarI')
let nameI = document.getElementsByClassName('nameI')
let phoneI = document.getElementsByClassName('phoneI')
let emailI = document.getElementsByClassName('emailI')
let birthdayI = document.getElementsByClassName('birthdayI')
let b = document.getElementsByClassName('b')
let deletI = document.getElementById('deletI')
let b2 = document.getElementById('b2')
//Массив в JS

let users = ['Иван', 'Павел', 'Анна']

//Получение элемента массива
//массив[индекс элемента]
//индекс - порядковый номер (начинается с 0)
console.log(users[1])

//Получение кол-ва элементов в массиве
//массив.length
console.log('Кол-во элементов: ', users.length)

//Добавление элемента массива
//массив.push
users.push('Дмитрий')

//Удаление элемента из конца массива
//массив.pop
users.pop()

//Добавление элемента массива в начало
//массив.unshift
users.unshift('Босс')

//Удаление элемента из начала массива
//массив.shift
users.shift()

//Удаление элемента по индексу
//массив.splice(индекс для удаление, кол-во элементов)
// users.splice(1, 2)

console.log(users, users.length)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Объекты в JS
users = [
    {
        avatar: 'https://cdn1.flamp.ru/baa6d870a72fea7fd70b4b866cd456fe.png',
        name: 'Иван',
        email: 'ivan@mail.ru',
        phone: '+7 (999) 143-143-14',
        birthday: '07.02.1998',
    },
    {
        avatar: 'https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png',
        name: 'Павел',
        email: 'pavel@mail.ru',
        phone: '+7 (989) 888-100-10',
        birthday: '09.09.1999',
    },
    {
        avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-1024.png',
        name: 'Анна',
        email: 'anna@mail.ru',
        phone: '+7 (988) 111-100-11',
        birthday: '08.06.1996',
    }
]

//Получение значения объекта по его ключу
let firstUser = users[0]

console.log('Первый пользователь', firstUser)
console.log('Имя пользователя: ', firstUser.name, firstUser['name'])

//Задать новое свойство объекта
firstUser['likes birds'] = true
firstUser['phone'] = '+9 (999) 999-99-99'

//Удалить свойство объекта
delete firstUser['likes birds']

console.log(users)

let usersList = document.getElementById('users-list')

function deletUser(){
    users.splice(deletI, 1)
}
b2.addEventListener('click', deletUser)

function addUser(){
    let user = {
        avatar: avatarI[0].value,
        name: nameI[0].value,
        email: emailI[0].value,
        phone: phoneI[0].value,
        birthday: birthdayI[0].value,
    }
    users.push(user)
    showUsers()
}
b[0].addEventListener('click', addUser)
//Функция для вывода пользователей на экран
function showUsers(){
    //Циклы в JS
    //for (let элемент_массива of массив){
    //  действия для выполнения элемента
    //}
    usersList.innerHTML = ''
    for (let user of users){


        //Создаем карточку пользователя
        let userCard = document.createElement('div')
        let userAvatar = document.createElement('div')
        let userName = document.createElement('h2')
        let userPhone = document.createElement('p')
        let userEmail = document.createElement('p')
        let userBirthday = document.createElement('p')

        //Добавляем карточке пользователя класс user-card
        userCard.classList.add('user-card')
        userAvatar.classList.add('user-avatar')
        userName.classList.add('user-name')

        userAvatar.innerHTML = `<img src="${user.avatar}" alt="">`
        userName.innerHTML = user.name
        userPhone.innerHTML = `<b>Телефон: </b>${user.phone}`
        userEmail.innerHTML = `<b>Email: </b>${user.email}`
        userBirthday.innerHTML = `<b>Дата рождение: </b>${user.birthday}`

        userCard.append(userAvatar, userName, userPhone, userEmail, userBirthday)

        usersList.append(userCard)
    }
}
b.addEventListener('click', showUsers)

// let numbers = [1, 2, 3, 4, 5, 6]
// for (let num of numbers){
//     console.log('Значение массива: ', num)
//     num = num + 1
// }
//
// numbers[0] = numbers[0] + 1
// numbers[1] = numbers[1] + 1
// numbers[2] = numbers[2] + 1
// numbers[3] = numbers[3] + 1
// numbers[4] = numbers[4] + 1
// numbers[5] = numbers[5] + 1
// console.log(numbers)