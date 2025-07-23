var a = 22;
var b = 25;



// const findGretter = (x,y)=>{
//     return x > y ? "X is gretter" : "y is gretter";
// }


// const findGretter = (x,y)=> x > y ? "X is gretter" : "y is gretter";


// let ans = findGretter(a,b)
// console.log(ans);


const RandomOTP = ()=>{
    return Math.trunc(1000 + Math.random()* 9000)
}

let ans = RandomOTP()
console.log(ans);