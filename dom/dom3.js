// let a = 1;
var colors = ["red", "blue", "green", "yellow", "orange", "purple", "black"];
// mydiv.style.backgroundColor = colors[0];
function changeColor(){

    // console.log(a++);
    let mydiv = document.getElementById("mydiv");
    
    let randomIndex = Math.floor(Math.random() * colors.length);
    console.log(randomIndex);

    mydiv.style.backgroundColor = colors[randomIndex];

    
    
    
    // console.log("helow");
    
}