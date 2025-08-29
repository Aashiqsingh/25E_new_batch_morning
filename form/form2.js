const submitHandler = (event)=>{
    event.preventDefault();

    let name = document.getElementById("name")
    let gender = document.getElementsByName("gender")
    // console.log(gender);
    let age = document.getElementById("age")
    let result = document.getElementById("result")

    let gen = ""

    if(gender[0].checked == true)
    {
        gen = "Male"
    }
    else if(gender[1].checked == true){
        gen = "Female" 
    }
    else{
        gen = "Other"
    }

    console.log(name.value , " " , gen , " " , age.value);

    if(gen == "Male"){
        if(age.value > 18){
            result.innerText = "You are Eligible for vote"
        }
        else{
            result.innerText = "You are Not Eligible for vote"
        }
    }
    else if(gen == "Female"){
        if(age.value > 21){
            result.innerText = "You are Eligible for vote"
        }
        else{
            result.innerText = "You are Not Eligible for vote"
        }
    }
    else{
        if(age.value > 25){
            result.innerText = "You are Eligible for vote"
        }
        else{
            result.innerText = "You are Not Eligible for vote"
        }
    }
    
    
}