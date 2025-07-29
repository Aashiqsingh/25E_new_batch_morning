const science = (option)=>{
    console.log(option.fname + " ur admision confirm in science with per " + option.per);
    
}

const commerce = (option)=>{
    console.log(option.fname + " ur admision confirm in commerce with per " + option.per);
}

const arts = (option)=>{
    console.log(option.fname + " ur admision confirm in arts with per " + option.per);
}

// cb -- callback 
const admission = (fname,per,cb)=>{
    cb({fname:fname,per:per})
}


var percentage = 45;

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