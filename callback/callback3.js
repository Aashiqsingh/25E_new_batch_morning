const science = (option)=>{
    return option.fname + " ur admision confirm in science with per " + option.per
    
}

const commerce = (option)=>{
    return option.fname + " ur admision confirm in commerce with per " + option.per
}

const arts = (option)=>{
    return option.fname + " ur admision confirm in arts with per " + option.per
}

// cb -- callback 
const admission = (fname,per,cb)=>{
    let x = cb({fname:fname,per:per})
    console.log(x)
}


var percentage = 93;

if(percentage > 90){
    admission("hiya",percentage,science)
}
else if(percentage > 70){
    admission("hiya",percentage,commerce)
}
else if(percentage > 50){
    admission("hiya",percentage,arts)
}
else{
    console.log("Sorry, you are not eligible for admission");
}