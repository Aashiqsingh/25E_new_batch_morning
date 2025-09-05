const submitHandler = ()=>{
    let name = document.getElementById("name").value 
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")


    console.log("name...",name);
    console.log("email...",email.value);
    console.log("phone...",phone.value);

    localStorage.setItem("name",name)
    localStorage.setItem("email",email.value)
    localStorage.setItem("phone",phone.value)


    // location.href = "."
}

const getData = ()=>{
    let name = localStorage.getItem("name")
    let email = localStorage.getItem("email")
    let phone = localStorage.getItem("phone")

    console.log("name...",name);
    console.log("email...",email);
    console.log("phone...",phone);
}

const deleteData = ()=>{
    // localStorage.removeItem("name")
    // localStorage.removeItem("email")
    // localStorage.removeItem("phone")


    localStorage.clear()
}