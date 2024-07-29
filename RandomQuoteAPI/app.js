

const quote = document.getElementById("quote");
const btn = document.getElementById("btn");
const url = "https://api.quotable.io/random";


let getQuote =  () => {

    fetch(url)
     .then((data) => data.json())
     .then((item) => {

    //    console.log(item.content);
    //    console.log(item.author)
       quote.innerText = item.content;
     });
}
window.addEventListener("load",getQuote)
btn.addEventListener("click",getQuote)
