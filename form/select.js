const changeColor = ()=>{
    let color = document.getElementById("color")
    console.log(color.value);


    var mydiv = document.getElementById("mydiv")
    mydiv.style.height = "300px"
    mydiv.style.width = "300px"
    mydiv.style.backgroundColor = color.value
    mydiv.style.margin = "100px 400px"
    
}

const changeRadius = ()=>{
    let radius = document.getElementById("radius")
    console.log(radius.value);
    

    mydiv.style.borderRadius = radius.value
}