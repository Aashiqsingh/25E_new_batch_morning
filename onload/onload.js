
const green = () =>{
    let body = document.getElementsByTagName("body")

    console.log(body);
    

    body.style.backgroundColor = "green"

    setTimeout(()=>{
        red()
    },2000)

}

const red = ()=>{
    let body = document.getElementsByTagName("body")[0]
    body.style.backgroundColor = "red"

    setTimeout(()=>{
        blue()
    },2000)
}

const blue = ()=>{
    let body = document.getElementsByTagName("body")[0]
    body.style.backgroundColor = "blue"

    setTimeout(()=>{
        green()
    },2000)
}