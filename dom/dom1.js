// console.log(document.getElementById("txt").innerHTML)

// let txt = document.getElementById("txt")
// txt.innerHTML = "Royal technosoft p ltd.";
// txt.style.backgroundColor = "red";
// txt.style.color = "white";
// txt.style.height = "100px";
// txt.style.width = "100px";


function changeTxt(){
    // alert("Hello");

    let txt = document.getElementById("txt")
    txt.innerHTML = "Royal technosoft p ltd.";
    txt.style.backgroundColor = "red";
    txt.style.color = "white";
}


const changeRef = ()=>{
    let link = document.getElementById("link")

    link.href = "https://www.netflix.com";
    link.innerHTML = "Netflix";
    link.target = "_blank";
}


const IncreseSize = ()=>{
    let img = document.getElementById("img")
    img.style.height = "200px";
    img.style.width = "200px";
    img.style.borderRadius = "50%";
}