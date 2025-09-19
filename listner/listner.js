let txt = document.getElementById("txt")
txt.addEventListener("click",()=>{
    txt.innerHTML = "Royal technosoft p ltd."
})
txt.addEventListener("dblclick",()=>{
    txt.style.backgroundColor = "red"
})
txt.addEventListener("mouseenter",()=>{
    txt.style.height = "200px";
    txt.style.width = "200px";
})
txt.addEventListener("mouseleave",()=>{
    txt.style.height = "";
    txt.style.width = "";
    txt.style.backgroundColor = "";
    txt.innerHTML = "Royal";
})