// json --> javascript object notation

// json -- file format
// json : key : value


// let student = {
//     id:1,
//     name:"harshil",
//     age:25,
//     email:"harshil@gmail.com",
//     gender:"male",
//     isActive:true
// }

// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.email);
// console.log(student.gender);



let employee = {
    id:1,
    name:"harsh",
    email:"harshil@gmail.com",
    age:25,
    salary:100000,
    isActive:true,
    mobile:[78238392332,2367123434,23623224344],
    address:{
        city:"delhi",
        state:"delhi",
        pincode:110001,
        country:"india",
        street:"114 C.g road",
        building:"no.1"
    }
}

console.log(employee);
console.log(employee.name);
console.log(employee.email);
console.log(employee.age);
console.log(employee.salary);
console.log(employee.mobile);
// console.log(employee.mobile[0]);

// for(let i=0;i<employee.mobile.length;i++){
//     console.log(employee.mobile[i]);
// }


console.log(employee.address);
console.log(employee.address.city);




