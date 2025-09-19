let box = document.getElementsByClassName("box")
// console.log(box);

box[0].addEventListener("click",()=>{
    box[2].style.backgroundColor = "red"
})
box[2].addEventListener("dblclick",()=>{
    box[0].style.borderRadius = "50%"
    box[1].style.borderRadius = "50%"
    box[3].style.borderRadius = "50%"

})

let colors = ["red","blue","green","yellow","purple","orange","pink","black","white"]
box[3].addEventListener("mousemove",()=>{
    let randomIndex = Math.floor(Math.random() * colors.length);
    box[0].style.backgroundColor = colors[randomIndex]
    box[1].style.backgroundColor = colors[randomIndex]
})