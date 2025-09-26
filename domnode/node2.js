let users = [
    {
        id: 1,
        name: "rahul",
        age: 25,
        gender: "male",
        email: "rahul@gmail.com",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYEI5nU2R_FOfpmEBKHJW7TXrT7PKTdmtAw&s"
    },
    {
        id: 2,
        name: "priya",
        age: 22,
        gender: "female",
        email: "priya@gmail.com",
        url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Droupadi_Murmu_POI_official_portrait.jpg/960px-Droupadi_Murmu_POI_official_portrait.jpg"
    },
    {
        id: 3,
        name: "rajvi",
        age: 23,
        gender: "female",
        email: "rajvi@gmail.com",
        url:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Sonia_Gandhi_and_Vladimir_Putin_in_March_2010_04.jpg"
    },
    {
        id: 4,
        name: "vijay",
        age: 24,
        gender: "male",
        email: "vijay@gmail.com",
        url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Shri_Amit_Shah_in_Raigad.jpg/250px-Shri_Amit_Shah_in_Raigad.jpg"
    },
    {
        id: 5,
        name: "rohan",
        age: 29,
        gender: "male",
        email: "rohan@gmail.com",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LLgPM73uYyeYM7qvzQHtIpVW75ZLYWVq4Q&s"
    }
]

// console.log(users[0].id);

let thead = document.getElementById("thead")
thead.style.display = "none"


let tbody = document.getElementById("tbody")
const addUser = () => {
    thead.style.display = ""

    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement("tr")
        let idTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let ageTd = document.createElement("td")
        let genderTd = document.createElement("td")
        let emailTd = document.createElement("td")
        let profileTd = document.createElement("td")
        let img = document.createElement("img")
        let actionTd = document.createElement("td")
        let btn = document.createElement("button")
        btn.innerHTML = "DELETE"
        btn.className = "btn btn-danger"
        btn.addEventListener("click",()=>{
            alert(users[i].id)
        })

        idTd.innerHTML = users[i].id
        nameTd.innerHTML = users[i].name
        ageTd.innerHTML = users[i].age
        genderTd.innerHTML = users[i].gender
        emailTd.innerHTML = users[i].email
        img.src = users[i].url 
        img.style.width = "100px"
        img.style.height = "100px"


        tbody.appendChild(tr)
        tr.appendChild(idTd)
        tr.appendChild(nameTd)
        tr.appendChild(ageTd)
        tr.appendChild(genderTd)
        tr.appendChild(emailTd)
        tr.appendChild(profileTd)
        profileTd.appendChild(img)
        tr.appendChild(actionTd)
        actionTd.appendChild(btn)
    }
}