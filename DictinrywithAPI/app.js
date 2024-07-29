
const btn = document.getElementById("search-btn");
const sound = document.getElementById("sound");
const result = document.getElementById("result")

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"


btn.addEventListener("click" , () =>{

    let inputWord = document.getElementById("input").value;

    fetch(`${url}${inputWord}`)
       .then((response) => response.json)
       .then((data) => console.log(data));
        result.innerHTML = ` 
        <div class="word">
        <h3>${inputWord}</h3>
        <button>
            <i class="fas fa-volume-up"></i> 
        </button> 
        </div>
        <div class="details">
        <p>${data[0].meaning[0].partsOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
    </div>
    <p class="word-meaning">
       ${data[0].meaning[0].definations[0]}
    </p>
   
    <p class="word-example">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis blanditiis cum aperiam repellat ipsam voluptatibus. Molestias accusamus, obcaecati nesciunt tenetur a voluptatibus odit itaque necessitatibus provident consequatur est debitis id!</p>`
       
}); 


     








