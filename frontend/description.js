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
    const $updateButton = document.createElement('button')
    $updateButton.innerText = 'Update'

    const dogDescription = document.createElement('h1')

    
    dogDescription.id = 'description-of-dog' 
    dogDescription.innerText = dogs.description 
    body.prepend(dogDescription)
    dogDescription.appendChild($updateButton)

    $updateButton.addEventListener('click', (event) => {
        fetch(`http://localhost:3000/breeds/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                // 'description': 

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
