const API_KEY = "4d5b1014-2ce3-49d6-b2ac-e47e01ed4533";
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
            console.log(mCountry)
            mCountries += mCountry.country +' '
        }
        for(let mGenre of movie.genres){
            console.log(mGenre)
            mGenres += mGenre.genre +' '
        }

        img.innerHTML = movie.posterUrlPreview
        title.innerHTML = movie.nameRu
        description.innerHTML = movie.description
        year.innerHTML = movie.year
        country.innerHTML = mCountries
        zhanr.innerHTML = mGenres
        time.innerHTML = movie.filmLength
        reyting1.innerHTML = movie.ratingImdb
        reyting2.innerHTML =  movie.ratingKinopoisk
    }
}

getMovie();