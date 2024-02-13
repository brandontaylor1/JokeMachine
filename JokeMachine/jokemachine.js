
const jokeSetup = document.getElementById('joke-setup')
const jokePunchline = document.getElementById('joke-punchline')
const nextJokeBtn = document.getElementById('next-jokeBtn')



let likes;
let dislikes;

async function fetchJoke() {
    try {
        let response = await fetch('https://official-joke-api.appspot.com/random_joke')
          let joke = await response.json() 
        jokeSetup.textContent = joke.setup
        setTimeout(() => {
            jokePunchline.textContent = joke.punchline
        }, 5000)
    } catch(error){
        console.log(error, {message: error.message})
    }
}

nextJokeBtn.addEventListener('click', () => {
    jokeSetup.textContent = " "
    jokePunchline.textContent = " "
    fetchJoke(); 
})

