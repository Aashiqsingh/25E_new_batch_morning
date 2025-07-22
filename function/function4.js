function science(option){
    return option.fname + " ur admision confirm in science department with per " + option.per
    
}

function commerce(option){
    return option.fname + " ur admision confirm in commerce department with per " + option.per
}

function arts(option){
    return option.fname + " ur admision confirm in arts department with per " + option.per
}

var percentage = parseInt(prompt("Enter percentage:"));
var name = prompt("Enter name:");
let temp;

if(percentage > 90){
    temp = science({
        fname:name,
        per:percentage
    })
}
else if(percentage > 70){
    temp = commerce({fname:name,per:percentage})
}
else if(percentage > 50){
    temp = arts({fname:"rahul",per:percentage})
}
else{
    console.log("percentage is less than 50")
}
console.log(temp);
