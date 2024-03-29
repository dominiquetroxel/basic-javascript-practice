import { films } from '../Assets/films.js'
import { people } from '../Assets/people.js'
console.log('Hey, I am JavaScript on your page!')

let mainHeader = document.querySelector('header')
let mainArea = document.querySelector('main')


/* 

people.forEach((person) => {
    let personDiv = document.createElement('div')
    ...
})


films.forEach(function(film) {
let filmDiv = document.createElement('div')
let title = document.createElement('h1')
let crawl = document.createElement('p')

filmDiv.appendChild(title)
filmDiv.appendChild(crawl)

title.textContent = film.title
crawl.innerText = film.opening_crawl

let mainArea = document.querySelector('main')
mainArea.appendChild(filmDiv)
});*/

const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const allDivs = mainArea.querySelectorAll('div')

let maleButton = document.createElement('button')
maleButton.textContent = "Male Characters"
maleButton.addEventListener('click', event => {
    maleCharacters.forEach(elt => {
        let matchedDiv = allDivs.filter(element => {
            console.log(element)
        })
    }

        //console.log(elt)
    /*elt.setAttribute("style ", "visibility: visible");*/
,)

femaleCharacters.forEach(elt => {
    /*elt.setAttribute("style", "visibility: hidden");*/
})


let femaleButton = document.createElement('button')
femaleButton.textContent = "Female Characters"
femaleButton.addEventListener('click', () => {

})

mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)


people.forEach((person) => {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement ('p')
    let pic = document.createElement('img')

    pic.setAttribute('class', 'picDivs')

    let charNum = getCharNumber(person.url)


    name.textContent = person.name
    gender.textContent = person.gender
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`


    mainArea.appendChild(personDiv)

})
function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1) {
        return charID.slice(1,2)
    } else {
        return charID
}
}


const maleCharacters = people.filter(person => person.gender === 'male')
console.log(maleCharacters)
const femaleCharacters = people.filter(person => person.gender === 'female')
console.log(femaleCharacters)

})
