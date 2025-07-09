let a = 21;
let b = 22;
let c = 23;

// with logical operator
// let ans = a > b && a > c ? "A is gretter" : b > a && b > c ? "B is gretter" : "C is gretter";
// console.log(ans);

let ans = a > b ?( a > c ? a : c ): (b > c ? b : c);
console.log(ans);




// let ans = a > b ? "A is gretter" : "B is greater";
// console.log(ans);


// a > b ? console.log("A is gretter") : console.log("B is greater");


// let result = a > b ? a : b;
// console.log(result + " is gretter");
// let result = a > b || a > c || b > a || b > c  ? a : b : c ;  
//   console.log(result + "is greater");

// let result = a > b ? "a is greater" : "b is greater or equal";
// console.log(result);

// let ans = (a > b && a > c) ? "A is greater" : (b > a && b > c) ? "B is greater" : "C is greater";
// console.log(ans);

// let max = (a > b && a > c) ? "A is greatest" : (b > a && b > c) ? "B is greatest" :"C is greatest";
// console.log(max);