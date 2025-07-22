function science(fname,per){
    console.log(fname + " ur admision confirm in science department with per " + per);
    
}

function commerce(fname,per){
    console.log(fname + " ur admision confirm in commerce department with per " + per);
}

function arts(fname,per){
    console.log(fname + " ur admision confirm in arts department with per " + per);
}

let percentage = parseInt(prompt("Enter percentage:"));
let name = "daksh";

if(percentage > 90){
    science(name,percentage)
}
else if(percentage > 70){
    commerce(name,percentage)
}
else if(percentage > 50){
    arts(name,percentage)
}
else{
    console.log("percentage is less than 50")
}