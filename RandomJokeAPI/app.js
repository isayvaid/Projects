

// const joke = document.getElementById("joke");
// const btn = document.getElementById("btn");
// const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single"


// let getJoke = () => {
//      joke.classList.remove("fade")
//      fetch(url)
//      .then(data => data.json())
//     //  .then(item => console.log(item.joke));

//      .then(item => {

//         joke.textContent = `${item.joke}`
//          joke.classList.add("fade");
//      });

// }

// btn.addEventListener("click" ,getJoke);



const joke = document.getElementById("joke")
const btn = document.getElementById("btn")
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single";


let getJoke = () => {
    joke.classList.remove("fade")
    fetch(url)
    .then(data => data.json())
     .then(item => {
        joke.textContent = `${item.joke}`
        joke.classList.add("fade")

    });
    
}
btn.addEventListener("click" , getJoke)





