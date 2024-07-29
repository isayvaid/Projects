

// const input = document.querySelector("input");
// const icon = document.getElementById("eye-icon")



//  icon.addEventListener("click" , () =>{

//     input.type === "password" ? (input.type = "text") : (input.type = "password")

//  })



const input = document.querySelector("input");
const icon  = document.getElementById("eye-icon")


icon.addEventListener("click", () =>{

    input.type === "password" ? (input.type = "text") : (input.type = "password")
})