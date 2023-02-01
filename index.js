let cookieCounter = 0;
let cookieParagraph = document.getElementById("cookieParagraph")
let cookieImage = document.getElementById("cookie1")
cookieImage.addEventListener("click", function(){
    cookieCounter++    
    cookieParagraph.innerHTML = cookieCounter
})
let text = document.getElementById("placeholdertext")
text.style.fontSize = "15px"
let Button1 = document.getElementById("Button1")
Button1.addEventListener("click", function(){
    console.log(text.style.fontSize)
    if (text.style.fontSize = "x-large");
})
let Button2 = document.getElementById("Button2")
Button2.addEventListener("click", function(){
    if (text.style.fontSize = "small");
})

function changeColor(){
    let color = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = color;
}