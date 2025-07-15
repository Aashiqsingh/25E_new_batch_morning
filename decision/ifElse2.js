let a = parseInt(prompt("Enter first number"));
let b = parseInt(prompt("Enter second number"));
let c = parseInt(prompt("Enter third number"));

let sum = 0;

if(a > 35){
    sum += a;
    // sum = sum + a; 
}
if(b > 35){
    sum += b;
}
if(c > 35){
    sum += c;
}

console.log(sum);
