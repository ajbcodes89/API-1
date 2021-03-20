const filmURL = "https://ghibliapi.herokuapp.com/films"
const peopleURL = "https://ghibliapi.herokuapp.com/people/"

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
        let movie = film[0][index]
        let title = document.getElementById('title')
        title.innerText = movie.title
        let originalTitle = document.getElementById('originalTitle')
        originalTitle.innerText = movie.original_title
        let description = document.getElementById('description')
        description.innerText = movie.description
}
makeCard();

function handleClick(){
        let card = document.getElementById('card')
        card.style.display = 'flex'
        makeCard()
        index++;
}