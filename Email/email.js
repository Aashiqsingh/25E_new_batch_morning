const EmailSent = (event)=>{
    event.preventDefault()

    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let message = document.getElementById("message")

    console.log(name.value)
    console.log(email.value)
    console.log(message.value)


    const params = {
        name:name.value,
        email:email.value,
        msg:message.value
    }

    const serviceId = "service_l0og3lv";
    const templateId = "template_qgmmaae";

    emailjs.send(serviceId,templateId,params).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}