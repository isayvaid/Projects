
var isStatus = document.querySelector("h3")
var btn = document.querySelector("#btn")
// var remove = document.querySelector("#remove-btn")
var check = 0;

btn.addEventListener ("click" , function() {
    if(check == 0){
        btn.innerHTML = "Remove Friend"
        isStatus.innerHTML = "BUT NOW WE ARE FRIENDS"
        isStatus.style.color = "green" 
        check = 1;
    }
    else{
        
        isStatus.innerHTML = "WE ARE NOT FRIENDS"
        isStatus.style.color = "red" 
         btn.innerHTML = "Add Friend"
        check = 0;
    }
})

// remove.addEventListener ("click" , function(){
//     isStatus.innerHTML = "WE ARE NOT FRIENDS"
//     isStatus.style.color = "red"
// })


