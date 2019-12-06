const body = document.body 

fetch('http://localhost:3000/breeds')
    .then(handleResponse)
    .then(showDogs)

function handleResponse(response){
    return response.json()
}

const dogSection = document.querySelector('#dog-section')
const dogForm = document.querySelector('#dog-form')
function showDogs(dogs){
    dogForm.addEventListener('submit', (event) => {
        event.preventDefault()
        
        const breedData = new FormData(event.target)
        const aDogsBreed = breedData.get('breed')
        const aDogsInfo = breedData.get('info')
        const aDogsPic = breedData.get('image_url')
        const aDogsDescription = breedData.get('description')

        const dogCard = document.createElement('div')
        dogCard.id = 'dog-div'
        const dogBreed = document.createElement('h2')
        const dogPic = document.createElement('img')
        const dogInfo = document.createElement('h5')
        const describeDog = document.createElement('h3')
        const $deleteDog = document.createElement('button')
    
        $deleteDog.innerText = 'Delete'
        dogBreed.innerText = aDogsBreed
        dogPic.src = aDogsPic 
        dogInfo.innerHTML = `<a href=description.html?id=${dogs.id}>This dog's Description</a>`
        describeDog.innerText = aDogsDescription 

        dogSection.appendChild(dogCard)  
        dogCard.append(dogPic, dogBreed, dogInfo, $deleteDog)        
        
        fetch('http://localhost:3000/breeds', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'breed': aDogsBreed,
                'info': aDogsInfo,
                'image_url': aDogsPic,
                'description': aDogsDescription
            })
        })
    })

    dogs.forEach(dog => {
        const dogCard = document.createElement('div')
        dogCard.id = 'dog-div'
        const dogBreed = document.createElement('h2')
        const dogPic = document.createElement('img')
        const dogInfo = document.createElement('h5')
        const $deleteDog = document.createElement('button')

        $deleteDog.innerText = 'Delete'
        dogBreed.innerText = dog.breed 
        dogPic.src = dog.image_url 
        dogInfo.innerHTML = `<a href=description.html?id=${dog.id}>This dog's Description</a>`
        
        dogCard.addEventListener('click', (event) => {
            if (event.target === $deleteDog){
                deleteDogFunction(dog)
            } else {
                fetch(`http://localhost:3000/breeds${dog.info}`, {
                     method: 'VIEW' 
                }).then(window.location = `${dog.info}`)
             }
         })
            
        dogSection.appendChild(dogCard)  
        dogCard.append(dogPic, dogBreed, dogInfo, $deleteDog)        
    })
        
    function deleteDogFunction(dog){
        event.preventDefault()
        event.target.parentNode.remove()

        fetch(`http://localhost:3000/breeds/${dog.id}`, {
            method: 'DELETE'
        }) 
    }
}