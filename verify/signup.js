const signup = (event)=>{
    event.preventDefault();


    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let age = document.getElementById("age")


    localStorage.setItem("name",name.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value)

    location.href = "./login.html"
}


const login = ()=>{
    let email = document.getElementById("email")
    let password = document.getElementById("password")


    let localStorageEmail = localStorage.getItem("email")
    let localStoragePassword = localStorage.getItem("password")
    let localStorageName = localStorage.getItem("name")

    let otp = Math.floor(100000 + Math.random() * 900000)

    let serviceId = "service_l0og3lv";
    let templateId = "template_qgmmaae";

    const data = {
        name:localStorageName,
        email:email.value,
        otp:otp
    }

    localStorage.setItem("otp",otp)


    if(email.value === localStorageEmail && password.value === localStoragePassword){
        alert("Login Successful")
        emailjs.send(serviceId,templateId,data).then((res)=>{
            console.log(res)

            if(res.status == 200){
                alert("OTP sent to your given email..");
                location.href = "./verify.html"
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
    else{
        alert("Login Failed")
    }
}


const verify = ()=>{
    let localStorageOtp = localStorage.getItem("otp")

    let otp = document.getElementById("otp")

    if(localStorageOtp == otp.value){
        alert("Verification Successful")
    }
    else{
        alert("Verification Failed")
    }
}