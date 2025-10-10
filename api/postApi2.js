const postData = async(event)=>{
    event.preventDefault();

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let age = document.getElementById("age").value
    let status = document.getElementById("status").value


    let users = {
        name:name,
        email:email,
        password:password,
        age:age,
        isActive:status
    }

    


    // console.log(name,email,password,age,status);
    const res = await fetch("https://node5.onrender.com/user/user",{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        // body:JSON.stringify({
        //     name:name,
        //     email:email,
        //     password:password,
        //     age:age,
        //     isActive:status
        // })
        body:JSON.stringify(users)
    })

    // console.log("....",res);
    const response = await res.json()
    console.log(response);
    
}