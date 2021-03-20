const filmURL = "https://ghibliapi.herokuapp.com/films"
const peopleURL = "https://ghibliapi.herokuapp.com/people/"

// let buttonGo = document.getElementById('buttonGo');
// buttonGo.addEventListener('click', getMovie);

let cardContainer = document.getElementsByClassName('card');
//let title = document.getElementById('title');
let originalTitle = document.getElementById('originalTitle');
let description = document.getElementById('description')
let film = []
let index = 0

function setFilm(data) {
        return film.push(data)
}
console.log(film)

function fetchJSON() {
        fetch(filmURL)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return setFilm(data)
        }) 
    }
    fetchJSON();

function makeCard() {
        // let movie = film
        // console.log(movie)
        // let movieList = data;
        // for(i = 0; i <= 21; i++) {
                //console.log(film[0][index])
                let movie = film[0][index]
                let title = document.getElementById('title')
                title.innerText = movie.title
        // }
}
makeCard();

function handleClick(){
        let card = document.getElementById('card')
        card.style.display = 'flex'
        makeCard()
        index++;
}

// let buttonGo = document.getElementById('buttonGo');
// buttonGo.addEventListener('click', );