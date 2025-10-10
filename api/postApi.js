

const postData = async()=>{
    const res = await fetch("https://node5.onrender.com/user/user",{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body:JSON.stringify({
            name:"priya",
            email:"priya@gmail.com",
            password:"123456",
            age:25,
            isActive:true
        })
    })

    console.log("....",res);
    
}