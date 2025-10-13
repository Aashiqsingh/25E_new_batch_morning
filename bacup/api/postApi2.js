const postData = async(event)=>{
    event.preventDefault();

    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const age = document.getElementById("age")
    const status = document.getElementById("status")

    let user = {
        name:name.value,
        email:email.value,
        password:password.value,
        age:age.value,
        isActive:status.value
    }

    // console.log(name.value,email.value,age.value,password.value,status.value);

    const res = await fetch("https://node5.onrender.com/user/user",{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body:JSON.stringify(user)
    })

    console.log("....",res);
    let reponse = await res.json()
    console.log(reponse);
    
}