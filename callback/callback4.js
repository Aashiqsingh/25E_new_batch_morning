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
    // console.log(x)

    return x;
}


var percentage = 73;
let temp;

if(percentage > 90){
    temp = admission("hiya",percentage,science)
}
else if(percentage > 70){
    temp = admission("hiya",percentage,commerce)
}
else if(percentage > 50){
    temp = admission("hiya",percentage,arts)
}
else{
    console.log("Sorry, you are not eligible for admission");
}
console.log(temp);
