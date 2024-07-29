

var main = document.querySelector("#main")
var cr = document.querySelector(".cursor")

//here det means details ,we pass as the argumnet ,with the help of that we can check y axis and x axis

main.addEventListener("mousemove" ,function(det){
    cr.style.left = det.x+ "px" 
    cr.style.top = det.y+ "px"
})