const getData = async()=>{
    const res = await fetch("https://node5.onrender.com/user/user",{
        method:"GET",
        headers:{
            "content-type": "application/json"
        }
    })

    let response = await res.json()
    console.log(response);

    let tbody = document.getElementById("tbody")
    response.data.map((data)=>{
        let tr = document.createElement("tr")
        let idTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let emailTd = document.createElement("td")
        let passwordTd = document.createElement("td")
        let ageTd = document.createElement("td")
        let statusTd = document.createElement("td")
        let actionTd = document.createElement("td")
        let deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Delete"
        deleteBtn.className = "btn btn-danger"
        deleteBtn.addEventListener("click",async()=>{
            // alert(data._id)
            const res2 =await fetch("https://node5.onrender.com/user/user/"+data._id,{
                method:"DELETE",
                headers:{
                    "content-type": "application/json"
                }
            })
            console.log(res2);
            tr.remove()
            
        })


        idTd.innerHTML = data._id
        nameTd.innerHTML = data.name
        emailTd.innerHTML = data.email
        passwordTd.innerHTML = data.password
        ageTd.innerHTML = data.age
        statusTd.innerHTML = data.isActive 

        tr.appendChild(idTd)
        tr.appendChild(nameTd)
        tr.appendChild(emailTd)
        tr.appendChild(passwordTd)
        tr.appendChild(ageTd)
        tr.appendChild(statusTd)
        tr.appendChild(actionTd)
        actionTd.appendChild(deleteBtn)
        tbody.appendChild(tr)
    })
}