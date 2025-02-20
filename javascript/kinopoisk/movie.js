const API_KEY = "be02d04a-425d-4587-8b3e-5a62452855cd";
let movie = null;

let img = document.getElementById("img");
let title = document.getElementById("title");
let description = document.getElementById("description");
let year = document.getElementById("year");
let country = document.getElementById("country");
let zhanr = document.getElementById("zhanr");
let time = document.getElementById("time");
let reyting1 = document.getElementById("reyting1");
let reyting2 = document.getElementById("reyting2");
let ssilka = document.getElementById("ssilka");

let bComment = document.getElementById('bComment');

async function getMovie() {
    // Получаем список параметров из адреса страницы в браузере - window.location.search
    const params = new URLSearchParams(window.location.search);
    // Получаем параметр id, который мы передали со страницы со всеми фильмами
    const filmId = params.get('id');
    // Если не нашли параметр id, то вернем пользователя на страницу со всеми фильмами, так как без него мы не сможем найти фильм
    if (filmId === null) {
        // Выводим предупреждение о том, что фильм не найден
        alert('Фильм не найден!');
        // Открываем в браузере страницу со списком всех фильмов
        window.open('index.html');
    }
    else {
        // Подставляем полученный id фильма в ссылку на получение данных о конкретном фильме
        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${ filmId }`, {
            headers: {
                "Content-Type": 'application/json',
                "X-API-KEY": API_KEY,
            },
        });
        movie = response.data;
        let mCountries = ''
        let mGenres = ''
        for(let mCountry of movie.countries){
            mCountries += mCountry.country +' '
        }
        for(let mGenre of movie.genres){
            mGenres += mGenre.genre +' '
        }

        img.src = movie.posterUrlPreview
        title.innerHTML = movie.nameRu
        description.innerHTML = movie.description
        year.innerHTML = movie.year
        country.innerHTML = mCountries
        zhanr.innerHTML = mGenres
        time.innerHTML = movie.filmLength ? movie.filmLength + ' мин' : 'Не указано'
        reyting1.innerHTML = movie.ratingImdb || 'Не указано'
        reyting2.innerHTML =  movie.ratingKinopoisk
        ssilka.href = movie.webUrl
    }
}
getMovie();

async function getSimilarMovies() {
    const params = new URLSearchParams(window.location.search);
    const filmId = params.get('id');
    const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${ filmId }/similars`, {
        headers: {
            "Content-Type": 'application/json',
            "X-API-KEY": API_KEY,
        },
    });

    similar_movies = response.data.items;
    showSimilarMovies()
}

function showSimilarMovies(){
    let SIMmovies = document.getElementById('movies')
    for (let movie of similar_movies) {
        let movieCard = document.createElement('div')
        let movieTitle = document.createElement('div')
        let movieImg = document.createElement('div')

        movieCard.classList.add('movie-card')
        movieTitle.classList.add('movie-card__title')
        movieImg.classList.add('movie-card__cover')

        movieTitle.innerHTML = `<b>${movie.nameRu}</b>`
        movieImg.innerHTML = `<img class="movie-card__cover" src="${movie.posterUrl}" alt="">`
        movieCard.append(movieImg, movieTitle)
        movies.append(movieCard)

        function newPage(){
            window.open(`movie.html?id=${ movie.filmId}`)
        }
        movieCard.addEventListener("click", newPage)
        SIMmovies.append(movieCard)
    }
}

getSimilarMovies()

function Comment(){
    let nameC = document.getElementById("author");
    let comC = document.getElementById('text')
    let coments = document.getElementById('items')
    let comment = document.createElement('div')
    let Cauthor = document.createElement('div')
    let Ctext = document.createElement('div')

    comment.classList.add('comments-list__item')
    Cauthor.classList.add('comments-list__author')
    Ctext.classList.add('comments-list__text')

    Cauthor.innerHTML = nameC.value
    Ctext.innerHTML = comC.value

    comment.append(Ctext, Cauthor)

    coments.prepend(comment)

    nameC.value = ""
    comC.value = ""
}
bComment.addEventListener('click', Comment)