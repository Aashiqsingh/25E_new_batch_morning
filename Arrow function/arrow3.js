const lasvegas = (amount,fname)=>{
    console.log(fname + " your tour confirm in lasvegas with package "+amount);   
}

const newyork = (amount,fname)=>{
    console.log(fname + " your tour confirm in newyork with package "+amount);   
}

const dubai = (amount,fname)=>{
    console.log(fname + " your tour confirm in dubai with package "+amount);   
}

const goa = (amount,fname)=>{
    console.log(fname + " your tour confirm in goa with package "+amount);   
}

var budget = 1000;
let firstName = "rahul";

if(budget > 3500){
    lasvegas(budget,firstName)
}
else if(budget > 2500){
    newyork(budget,firstName)
}
else if(budget > 1500){
    dubai(budget,firstName)
}
else if(budget > 1000){
    goa(budget,firstName)
}
else{
    console.log(firstName + " you need to earn money bro...");
    
}