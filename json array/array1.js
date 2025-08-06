var students = [
    {
        id : 1,
        name:"pranshul",
        age:15,
        email:"pranshul@gmail.cloud",
        mobile:7826397878,
        isMarried:true,
        child:2
    },
    {
        id:2,
        name:"rahul",
        age:29,
        email:"rahul@gmail.com",
        mobile:87263978,
        isMarried:false,
        child:0
    },
    {
        id:3,
        name:"rohan",
        age:27,
        email:"rohan@gmail.in",
        mobile:9826397878,
        isMarried:false,
        child:0
    },
    {
        id:4,
        name:"ronali",
        age:24,
        email:"sonali@gmail.info",
        mobile:8726978,
        isMarried:true,
        child:2
    },
    {
        id:5,
        name:"satva",
        age:16,
        email:"satva@gmail.in",
        mobile:7669738338,
        isMarried:true,
        child:1
    }
]


// let x = students.filter((stu)=>{
//     return stu.child == 0
// })

// console.log(x);

let x = students.filter((stu)=> stu.email.endsWith(".in")).map((stu)=> stu.name)
console.log(x);

// students.forEach((stu)=>{
//     if(stu.email.endsWith(".in")){
//         console.log(stu.name);
        
//     }
// })



// console.log(students);

// for(let i=0;i<students.length;i++){
//     console.log(students[i].name);
    
// }


// let x = students.map((stu)=>{
//     return stu.name
// })

// console.log(x);

// let x = students.filter((stu)=>{
//     return stu.age > 25
// })

// console.log(x);


// students.forEach((stu)=>{
//     if(stu.isMarried){
//         console.log(stu);
        
//     }
// })

// let x = students.filter((stu)=>{
//     return stu.isMarried 
// })
// console.log(x);
