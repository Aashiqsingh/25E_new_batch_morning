// let a = 0;

// if(a > 0)
// {
//     console.log("a is positive");
// }
// else{
//     console.log("a is negative");
// }


// if(a > 0){
//     console.log("a is positive");
// }
// else if(a == 0){
//     console.log("a is zero");
// }
// else{
//     console.log("a is negative");
// }


// let a = 16;
// let b = 17;
// let c = 18;


// if(a > b && a > c){
//     console.log("a is greater");
// }
// else if(b > a && b > c){
//     console.log("b is greater");
// }
// else{
//     console.log("c is greater");
// }

// if(a > b)
// {
//     if(a > c){
//         console.log("a is greater");
//     }
//     else{
//         console.log("c is greater");
//     }
// }
// else{
//     if(b > c){
//         console.log("b is greater");
//     }
//     else{
//         console.log("c is greater")
//     }
// }


// var isAlive = false;
// var age = 17;


// if(isAlive == true){
//     if(age > 18){
//         console.log("You are eligible to vote");
//     }
//     else{
//         console.log("You are not eligible to vote");
//     }
// }
// else{
//     console.log("DEAD..");
    
// }

// let isAlive = prompt("Are you alive ?");
let isAlive = confirm("Are you alive ?");
let age = parseInt(prompt("Enter your age :"));


if(isAlive == true){
    if(age > 18){
        console.log("You are eligible to vote");
    }
    else{
        console.log("You are not eligible to vote");
    }
}
else{
    alert("DEAD..");
}