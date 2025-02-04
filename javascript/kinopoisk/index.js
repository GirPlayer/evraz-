let items = []
let movies = document.getElementById("movies")
async function getFilm(){
    let response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films?type=TV_SERIES', {
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
    for(const item of items) {
        let films = document.createElement('div')
        let filmTitle = document.createElement('div')
        let filmRating = document.createElement('div')
        let filmImg = document.createElement('div')

        filmImg.classList.add('movie__cover-inner')
        filmTitle.classList.add('movie__title')
        filmRating.classList.add('movie__average')

        filmTitle.innerHTML = `<b>${item.nameRu}</b>`
        filmRating.innerHTML = `<b>${item.ratingKinopoisk}</b>` `<b>${item.year}</b>`
        filmImg.innerHTML = `<img class="movie__cover" src="${item.posterUrl}" alt="">`
        films.append(filmImg, filmTitle, filmYear, filmRating)
        movies.append(films)
    }
}