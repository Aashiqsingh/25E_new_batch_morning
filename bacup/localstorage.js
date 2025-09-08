const setData = ()=>{
    let name = document.getElementById("name")
    let email = document.getElementById("email")

    console.log(name.value);
    console.log(email.value);


    localStorage.setItem("name",name.value)
    localStorage.setItem("email",email.value)
    

}

const getData = ()=>{

    let output = document.getElementById("output")
    let name = localStorage.getItem("name")
    let email = localStorage.getItem("email")

    output.innerHTML = `Name : ${name} <br> Email : ${email}`
}

const removeData = ()=>{
    localStorage.clear()
    // localStorage.removeItem("name")
    // localStorage.removeItem("email")
}