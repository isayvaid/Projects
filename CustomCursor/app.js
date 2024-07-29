

// const cursor = document.querySelector(".cursor")


//  document.addEventListener("mousemove",function(event) {

//     moveCursor(event.pageX , event.pageY)

//  });

//  const moveCursor = function(pageX ,pageY){
//     cursor.style.left = pageX +"px";
//     cursor.style.top = pageY +"px";
//  }


// const cursor = document.querySelector(".cursor");

// document.addEventListener("mousemove" , function(event){
//     moveCursor(event.pageX ,event.pageY )
// })

   
// const moveCursor = function(pageX,pageY){
//     cursor.style.left=pageX+"px";
//     cursor.style.top=pageY+"px";
// }


const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove" , function(event) {

    move(event.pageX , event.pageY)

})

const move = function(pageX ,pageY){
    cursor.style.left = pageX + "px";
    cursor.style.top = pageY + "px";
}