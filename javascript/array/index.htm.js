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
    },
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

//Функция для вывода пользователей на экран
function showUsers(){
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

    userAvatar.innerHTML = `<img src="${firstUser.avatar}" alt="">`
    userName.innerHTML = firstUser.name
    userPhone.innerHTML = `<b>Телефон: </b>${firstUser.phone}`
    userEmail.innerHTML = `<b>Email: </b>${firstUser.email}`
    userBirthday.innerHTML = `<b>Дата рождение: </b>${firstUser.birthday}`

    userCard.append(userAvatar, userName, userPhone, userEmail, userBirthday)

    usersList.append(userCard)
}
showUsers();
