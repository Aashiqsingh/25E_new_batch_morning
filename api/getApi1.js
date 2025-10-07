const getData = async()=>{


    const res = await fetch("https://reqres.in/api/users?page=2",{
        method:"GET",
        headers:{
            "x-api-key": "reqres-free-v1"
        }
    })

    // console.log(res);
    let response = await res.json()
    console.log(response);
    console.log(response.data);


    let tbody = document.getElementById("tbody")
    response.data.map((data)=>{
        let tr = document.createElement("tr")
        let idTd = document.createElement("td")
        let firstNameTd = document.createElement("td")
        let lastNameTd = document.createElement("td")
        let emailTd = document.createElement("td")
        let avatarTd = document.createElement("td")
        let img = document.createElement("img")


        idTd.innerHTML = data.id
        firstNameTd.innerHTML = data.first_name
        lastNameTd.innerHTML = data.last_name
        emailTd.innerHTML = data.email
        img.src = data.avatar

        tr.appendChild(idTd)
        tr.appendChild(firstNameTd)
        tr.appendChild(lastNameTd)
        tr.appendChild(emailTd)
        tr.appendChild(avatarTd)
        avatarTd.appendChild(img)
        tbody.appendChild(tr)
    })
    
    
}