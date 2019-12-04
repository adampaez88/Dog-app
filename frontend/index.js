const body = document.body 


fetch('http://localhost:3000/breeds')
    .then(handleResponse)
    .then(showDogs)

function handleResponse(response){
    return response.json()
}

const dogSection = document.querySelector('#dog-section')
function showDogs(dogs){
    dogs.forEach(dog => {
        const dogCard = document.createElement('div')
        const dogBreed = document.createElement('h2')
        const dogPic = document.createElement('img')
        const dogInfo = document.createElement('h5')
        dogCard.id = 'dog-div'

        dogBreed.innerText = dog.breed 
        dogPic.src = dog.image_url 
        dogInfo.innerHTML = `<a href=${dog.info}>This dog's Info</a>`

        dogCard.addEventListener('click', (event) => {
            fetch(`http://localhost:3000/breeds${dog.info}`, {
                method: 'VIEW' 
            }).then(window.location = `${dog.info}`)
        })
        dogSection.appendChild(dogCard)  
        dogCard.append(dogPic, dogBreed, dogInfo)
    })
}