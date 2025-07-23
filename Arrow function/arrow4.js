const lasvegas = (amount,fname)=>{
    return fname + " your tour confirm in lasvegas with package "+amount 
}

const newyork = (amount,fname)=>{
    return fname + " your tour confirm in newyork with package "+amount 
}

const dubai = (amount,fname)=>{
    return fname + " your tour confirm in dubai with package "+amount
}

const goa = (amount,fname)=>{
    return fname + " your tour confirm in goa with package "+amount   
}

var budget = 1000;
let firstName = "rahul";
let result;



if(budget > 3500){
    result = lasvegas(budget,firstName)
}
else if(budget > 2500){
    result = newyork(budget,firstName)
}
else if(budget > 1500){
    result = dubai(budget,firstName)
}
else if(budget > 1000){
    result = goa(budget,firstName)
}
else{
    console.log(firstName + " you need to earn money bro...");
    
}
console.log(result);
