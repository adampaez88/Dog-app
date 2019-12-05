const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const body = document.body

fetch(`http://localhost:3000/breeds/${id}`)
    .then(response => response.json())
    .then(showDescription)

const home = document.querySelector('#home')
const form = document.querySelector('#comment-form')
const list = document.querySelector('#comment-list')
const commentInput = document.querySelector('#comment_input')
const descriptionContainer = document.querySelector('#container')
function showDescription(dogs){
    home.innerHTML = `<a href='http://localhost:3001/'>Home</a>`
    const dogDescription = document.createElement('h1')
    const dogName = document.createElement('h1')

    console.log(dogs)
    dogName.innerText = dogs.breed
    dogDescription.id = 'description-of-dog' 
    dogDescription.innerText = dogs.description 
    descriptionContainer.append(dogDescription)
    descriptionContainer.prepend(dogName)
    
    dogDescription.setAttribute('contenteditable', 'true')
    dogDescription.addEventListener('input', (event) => {
            event.preventDefault()
            fetch(`http://localhost:3000/breeds/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    },
                body: JSON.stringify({
                    'description': event.target.innerText
                })
            })
        })
     
        form.addEventListener('submit', (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const newComment = formData.get('comment')

        const $comments = document.createElement('li')

        $comments.textContent = newComment
        
        const $deleteButton = document.createElement('button')
        $deleteButton.innerText = 'Delete'

        fetch(`http://localhost:3000/comments/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'content': newComment,
                'breed_id': `${id}` 
            })
        })
        
        list.appendChild($comments)
        $comments.appendChild($deleteButton)  
     })
            
            dogs.comments.forEach(comment => {
                
                const $comments = document.createElement('li')
                $comments.id = comment.id 
                $comments.textContent = comment.content 
                
                const $deleteButton = document.createElement('button')
                $deleteButton.innerText = 'Delete'
                $deleteButton.id = 'delete-button'
                
                
                $deleteButton.addEventListener('click', (event) => {
                    const commentsId = event.target.parentNode.id 
                    event.target.parentNode.remove()

                fetch(`http://localhost:3000/comments/${commentsId}`, {
                    method: 'DELETE' 
                })
            })
        
        list.appendChild($comments)
        $comments.appendChild($deleteButton)

    })



}
