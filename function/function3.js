function science(fname,per){
    return fname + " ur admision confirm in science department with per " + per
    
}

function commerce(fname,per){
    return fname + " ur admision confirm in commerce department with per " + per
}

function arts(fname,per){
    return fname + " ur admision confirm in arts department with per " + per
}

let percentage = parseInt(prompt("Enter percentage:"));
let name = prompt("Enter name:");
let result;

if(percentage > 90){
    result = science(name,percentage)
}
else if(percentage > 70){
    result = commerce(name,percentage)
}
else if(percentage > 50){
    result = arts(name,percentage)
}
else{
    console.log("percentage is less than 50")
}

console.log(result);
