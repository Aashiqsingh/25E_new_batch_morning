const submitHandler = (event)=>{
    event.preventDefault();

    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const phone = document.getElementById("phone")

    let nameErr = document.getElementById("nameErr")
    let emailErr = document.getElementById("emailErr")
    let phoneErr = document.getElementById("phoneErr")


    let namePattern = /^[A-Za-z]+\s[A-Za-z]+$/;
    if(!name.value.match(namePattern)){
        nameErr.innerHTML = "Name should be alphabets only";
    }
    else{
        nameErr.innerHTML = name.value;
    }

    let phonePattern = /^[6-9]{1}[0-9]{9}$/
    if(!phone.value.match(phonePattern)){
        phoneErr.innerHTML = "Phone should be 10 digits only";
    }
    else{
        phoneErr.innerHTML = phone.value;
    }

    // aashiqsingh56789@gmail.com
    let emailPattern = /^[0-9a-z]+\@[a-z]+\.[a-z]+$/
    if(!email.value.match(emailPattern)){
        emailErr.innerHTML = "Email should be in correct format";
    }
    else{
        emailErr.innerHTML = email.value;
    }



    // console.log(name.value);
    // console.log(email.value);
    // console.log(phone.value);
    
}