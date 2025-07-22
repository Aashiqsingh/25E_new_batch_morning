// 1. without return without argument
// 2. without return with argument
// 3. with return without argument
// 4. with return with argument


// 1. without return without argument
function demo(){
    console.log("demo function called...");
    
}


// demo()
// console.log(demo);

// 2. without return with argument
function add(a,b){
    console.log("Addition = ",a+b);
    
}

// add(3,4)
// add("shree","ram")

// 3. with return without argument
function greet(){
    return "greet function return.....";
} 

// let ans = greet()
// console.log(ans);
// console.log(greet());


// 4. with return with argument

function mul(x,y,z){
    return x*y*z;
}

let result = mul(2,3,4)
console.log("multiply = ",result);
