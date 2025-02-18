let items = []
let movies = document.getElementById("movies")
let b1 = document.getElementById('page1')
let b2 = document.getElementById('page2')
let b3 = document.getElementById('page3')
let b4 = document.getElementById('page4')
let b5 = document.getElementById('page5')
let searchB = document.getElementById('searchB')
let params = {page:1, keyword: ''}
let buttonD = document.getElementById('buttonD')
async function getFilm(){
    let response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films?type=TV_SERIES', {
        params:params,
        headers: {
            'X-API-KEY': 'be02d04a-425d-4587-8b3e-5a62452855cd',
        }
    })
    items = response.data.items
    console.log(response.data)
    showFilm()
}
getFilm()

function showFilm(){
    movies.innerHTML = ''
    for(const item of items) {
        let films = document.createElement('div')
        let filmTitle = document.createElement('div')
        let filmRating = document.createElement('div')
        let filmImg = document.createElement('div')

        films.classList.add('movie')
        filmImg.classList.add('movie__cover-inner')
        filmTitle.classList.add('movie__title')
        filmRating.classList.add('movie__average')

        filmTitle.innerHTML = `<b>${item.nameRu}</b> (<b>${item.year}</b>)`
        filmRating.innerHTML = `<b>${item.ratingKinopoisk}</b>`
        filmImg.innerHTML = `<img class="movie__cover" src="${item.posterUrl}" alt="">`
        films.append(filmImg, filmTitle, filmRating)
        movies.append(films)

        function newPage(){
            window.open(`movie.html?id=${ item.kinopoiskId}`)
        }
        films.addEventListener("click", newPage)
    }
}

function pageFilms1(){
    params.page = 1
    b1.classList.add('active')
    b2.classList.remove('active')
    b3.classList.remove('active')
    b4.classList.remove('active')
    b5.classList.remove('active')
    getFilm()
}
b1.addEventListener('click', pageFilms1)

function pageFilms2(){
    params.page = 2
    b1.classList.remove('active')
    b2.classList.add('active')
    b3.classList.remove('active')
    b4.classList.remove('active')
    b5.classList.remove('active')
    getFilm()
}
b2.addEventListener('click', pageFilms2)

function pageFilms3(){
    params.page = 3
    b1.classList.remove('active')
    b2.classList.remove('active')
    b3.classList.add('active')
    b4.classList.remove('active')
    b5.classList.remove('active')
    getFilm()
}
b3.addEventListener('click', pageFilms3)

function pageFilms4(){
    params.page = 4
    b1.classList.remove('active')
    b2.classList.remove('active')
    b3.classList.remove('active')
    b4.classList.add('active')
    b5.classList.remove('active')
    getFilm()
}
b4.addEventListener('click', pageFilms4)

function pageFilms5(){
    params.page = 5
    b1.classList.remove('active')
    b2.classList.remove('active')
    b3.classList.remove('active')
    b4.classList.remove('active')
    b5.classList.add('active')
    getFilm()
}
b5.addEventListener('click', pageFilms5)

function searchFilm(){
    params.keyword = searchI.value
    getFilm()
}
searchB.addEventListener('click', searchFilm)

function resetFilm(){
    searchI.value = ''
    params.keyword = ''
    getFilm()
}
buttonD.addEventListener('click', resetFilm)

