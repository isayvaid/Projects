
var elem = document.querySelectorAll(".elem")
//var elemImg = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove", function(dets){
    
//     elemImg.style.left = dets.x+"px"
//      elemImg.style.top = dets.y+"px"
// })

// elem1.addEventListener("mouseenter", function(dets){
    
//     elemImg.style.opacity = 1;
    
// })
// elem1.addEventListener("mouseleave", function(dets){
    
//     elemImg.style.opacity = 0;
    
// })

elem.forEach(function (val) {
    val.addEventListener("mouseenter", function(){
//childNodes[3] means 3rd tag of elem that is img
        val.childNodes[3].style.opacity = 1
          
    });
    val.addEventListener("mouseleave", function(){

        val.childNodes[3].style.opacity = 0

    });

    val.addEventListener("mousemove", function(dest){

        val.childNodes[3].style.left = dest.x+"px"
        val.childNodes[3].style.top = dest.y+"px"

    });
})