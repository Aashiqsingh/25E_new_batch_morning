
var images = ["img1.png","img2.webp","img3.jpg","img4.jpg","img5.jpg"]
function changeImage(){

    let img = document.getElementById("img");

    let randomIndex = Math.floor(Math.random() * images.length);

    img.src = "../Image/" + images[randomIndex]
}