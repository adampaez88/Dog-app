const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const body = document.body

fetch(`http://localhost:3000/breeds/${id}`)
    .then(response => response.json())
    .then(showDescription)


const form = document.querySelector('#comment-form')
const list = document.querySelector('#comment-list')
const commentInput = document.querySelector('#comment_input')
function showDescription(dogs){
    const dogDescription = document.createElement('h1')

    dogDescription.innerText = dogs.description 
    body.prepend(dogDescription)

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const newComment = formData.get('comment')

        const $comments = document.createElement('li')
        $comments.textContent = newComment
        
        const $deleteButton = document.createElement('button')
        $deleteButton.innerText = 'Delete'
        
        fetch(`http://localhost:3000/breeds/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: ({
                'id': `${dogs.id}`,
                'content': newComment
            })
        })

        list.appendChild($comments)
        $comments.appendChild($deleteButton)
        
        $deleteButton.addEventListener('click', (event) => {
            event.target.parentNode.remove()
            
            fetch(`http://localhost:3000/breeds/${dogs.id}`, {
                method: 'DELETE' 
            })
        })

    })



}
