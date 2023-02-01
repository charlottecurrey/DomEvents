let cookieCounter = 0;
let cookieParagraph = document.getElementById("cookieParagraph")
let cookieImage = document.getElementById("cookie1")
cookieImage.addEventListener("click", function(){
    cookieCounter++    
    cookieParagraph.innerHTML = cookieCounter
})