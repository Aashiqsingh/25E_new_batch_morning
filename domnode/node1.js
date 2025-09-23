let mydiv = document.getElementById("mydiv")

const addTags = ()=>{

    let h1 = document.createElement("h1")
    h1.innerHTML = "Royal technosoft p ltd.";
    h1.style.backgroundColor = "#008000"



    let link = document.createElement("a")
    link.innerHTML = "Google"
    // link.href = "https://www.google.com"
    link.setAttribute("href","https://www.google.com")
    link.target = "_blank"

    let btn = document.createElement("button")
    btn.innerHTML = "Change href";
    btn.addEventListener("click",()=>{
        link.href = "https://www.amazon.com";
        link.innerHTML = "Amazon"
    })


    mydiv.appendChild(h1)
    mydiv.appendChild(link)
    mydiv.appendChild(btn)
}