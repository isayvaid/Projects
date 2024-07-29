

// const btn = document.getElementById("btn");
// let hexcode = document.getElementById("hexcode")

// function randomColor(){
//     let letter = '0123456789ABCDEF'
//     let color="#"

//      for(let i=0; i<6;i++){
//         color += letter[Math.floor(Math.random())*16]
//      }
//      return color
// }

// btn.addEventListener("click" , () => {
//     document.body.style.backgroundColor=randomColor();
//     hexcode.innerHTML=randomColor();
// })



const btn = document.getElementById("btn");
const hex = document.getElementById("hexcode");


function random (){

    let letter = "0123456789ABCDEF";
    let code = "#"

    for(let i=0; i<6;i++){

        code+= letter[Math.floor(Math.random()*16)]
    
    }
    return code;
}

btn.addEventListener("click",()=>{
    document.body.style.backgroundColor=random();
    hex.innerHTML=random();
})