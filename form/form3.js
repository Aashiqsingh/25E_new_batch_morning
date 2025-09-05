const submitHandler = (event)=>{
    event.preventDefault();

    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")

    let nameErr = document.getElementById("nameErr")
    let emailErr = document.getElementById("emailErr")
    let phoneErr = document.getElementById("phoneErr")

    let namePattern = /^([A-Za-z]+)(\s[A-Za-z]+)$/
    if(!name.value.match(namePattern)){
        nameErr.innerHTML = "Name should be alphabets only"
        nameErr.style.color = "red"
    }
    else{
        nameErr.innerHTML = name.value
        nameErr.style.color = "green"
    }

    // 6354717524

    let phonePattern = /^[6-9]{1}[0-9]{9}$/ 
    if(!phone.value.match(phonePattern)){
        phoneErr.innerHTML = "Phone number should be 10 digits"
        phoneErr.style.color = "red"
    }
    else{
        phoneErr.innerHTML = phone.value
        phoneErr.style.color = "green"
    }

    // aashiqsingh56789@gmail.com

    let emailPattern = /^[a-z0-9]+.@[a-z]+\.[a-z]{2,3}$/
    if(!email.value.match(emailPattern)){
        emailErr.innerHTML = "Email should be valid"
        emailErr.style.color = "red"
    }
    else{
        emailErr.innerHTML = email.value
        emailErr.style.color = "green"
    }












    // console.log(name.value)
    // console.log(email.value)
    // console.log(phone.value)
}