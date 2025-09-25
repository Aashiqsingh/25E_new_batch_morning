let box = document.getElementsByClassName("box")
console.log(box);


box[0].addEventListener("click",()=>{
    box[1].style.borderRadius = "50%"
    box[2].style.borderRadius = "50%"
    box[3].style.borderRadius = "50%"
})

box[2].addEventListener("mouseenter",()=>{
    box[0].style.backgroundColor = "red"
    box[1].style.backgroundColor = "red"
})

box[2].addEventListener("mouseleave",()=>{
    box[0].style.backgroundColor = "white"
    box[1].style.backgroundColor = "white"
})

let colors = ["red","blue","green","yellow","purple","orange","pink","black","white"]
box[1].addEventListener("mousemove",()=>{
    let randomIndex = Math.floor(Math.random() * colors.length);
    box[0].style.backgroundColor = colors[randomIndex]
    box[2].style.backgroundColor = colors[randomIndex]
    box[3].style.backgroundColor = colors[randomIndex]
})