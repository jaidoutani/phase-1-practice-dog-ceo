// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const imgContainer = document.getElementById("dog-image-container")
let breeds = []

// Fetches the images
function getDogs() {
    return fetch(imgUrl)
    .then(res => res.json())
    .then(res => {
        res.message.forEach(url => {
            // Adds image elements to the DOM image in the array
            const img = document.createElement("img")
            img.src = url
            imgContainer.append(img)
        })
    })
}
// Fetches all the dog breeds
function getDogBreeds() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(res => {
        breeds = Object.keys(res.message)
        addBreedNames(breeds)
    })
}
// Adds the breeds to the page in the <ul>
function addBreedNames(breeds) {
    const ul = document.querySelector("#dog-breeds")
    breeds.map(breed => {
        const li = document.createElement("li")
        li.textContent = breed
        ul.append(li)
    })
}

// Add color change to li tag on click
document.addEventListener("click", event => {
    if(event.target.matches("li")) {
        event.target.style.color = "red"
    }
})
// Filter breeds that start with a particular letter using a dropdown
document.addEventListener("change", event => {
    if(event.target.matches("#breed-dropdown")) {
        const ul = document.querySelector("#dog-breeds")
        ul.innerHTML = ""
        const filterBreeds = breeds.filter(breed => breed[0] === event.target.value)
        addBreedNames(filterBreeds) 
    }
})

getDogs()
getDogBreeds()