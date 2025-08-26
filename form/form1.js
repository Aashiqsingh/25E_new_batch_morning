const submitHandler = (event)=>{
    event.preventDefault(); // form default submission
    
    // alert("form submitted..")

    let name = document.getElementById("name").value  
    let mobile = document.getElementById("mobile").value 
    let age = document.getElementById("age").value 

    let output = document.getElementById("output")

    // console.log(name.value, age.value, mobile.value)
    // const user = {
    //     name:name.value,
    //     age:age.value,
    //     mobile:mobile.value
    // }
    // console.log(user);

    // const user = {
    //     name,
    //     age,
    //     mobile
    // }

    // console.log(user);
    // output.innerHTML = name + " " + age + " " + mobile 
    // output.innerHTML = user.name
    // let ans = JSON.stringify(user)
    // output.innerHTML = ans

    // console.log(ans[0]);

    let nameErr = document.getElementById("nameErr")
    let ageErr = document.getElementById("ageErr")
    let mobileErr = document.getElementById("mobileErr")

    if(name.length <= 0){
        nameErr.innerHTML = "Name is required";
        nameErr.style.color = "red";
    }
    else if(name.length < 4){
        nameErr.innerHTML = "Name must be at least 4 characters long";
        nameErr.style.color = "red";
    }
    else{
        nameErr.innerHTML = name;
        nameErr.style.color = "green";
    }
    if(age.length <= 0){
        ageErr.innerHTML = "Age is required";
        ageErr.style.color = "red";
    }
    else if(age < 18){
        ageErr.innerHTML = "you are not eligible for vote"
    }
    else{
        ageErr.innerHTML = age;
        ageErr.style.color = "green";
    }

    if(mobile.length == ""){
        mobileErr.innerHTML = "*Mobile number is required";
        mobileErr.style.color = "red";
    }
    else if(mobile.length == 10){
        mobileErr.innerHTML = mobile 
        mobileErr.style.color = "green";
    }
    else{
        mobileErr.innerHTML = "Invalid mobile number";
        mobileErr.style.color = "red";
    }

    // 5723874272



    console.log("form submitted..");
}