

// const grey = document.querySelector(".grey-heart");
// const red = document.querySelector(".red-heart");


// grey.addEventListener("click" ,()=>{
 
// red.classList.add("animation");
// red.classList.add("fill-color");

// });

// red.addEventListener("click" ,()=>{
 
//     red.classList.remove("animation");
//     red.classList.remove("fill-color");
    
//     });

const grey = document.querySelector(".grey-heart")
const red = document.querySelector(".red-heart")


grey.addEventListener("click" , () =>{


   red.classList.add("animation");
   red.classList.add("fill-color");
})
 
red.addEventListener("click" , () =>{


   red.classList.remove("animation");
   red.classList.remove("fill-color");
})
