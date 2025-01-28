let usersList = document.getElementById('users-list');
let users = []

async function getUsers() {
    //Получение пользователей
    //Дожидаемся ответов
    let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    users = response.data.users
    showUsers()
}
function showUsers(){
    usersList.innerHTML = ''
    for (let user of users){

        let userCard = document.createElement('div')
        let userAvatar = document.createElement('div')
        let userName = document.createElement('h2')
        let userPhone = document.createElement('p')
        let userEmail = document.createElement('p')
        let userBirthday = document.createElement('p')

        userCard.classList.add('user-card')
        userAvatar.classList.add('user-avatar')
        userName.classList.add('user-name')

        userAvatar.innerHTML = `<img src="${user.image}" alt="">`
        userName.innerHTML = user.firstName
        userPhone.innerHTML = `<b>Телефон: </b>${user.phone}`
        userEmail.innerHTML = `<b>Email: </b>${user.email}`
        userBirthday.innerHTML = `<b>Дата рождение: </b>${user.birthDate}`

        userCard.append(userAvatar, userName, userPhone, userEmail, userBirthday)

        usersList.append(userCard)
    }
}
getUsers()