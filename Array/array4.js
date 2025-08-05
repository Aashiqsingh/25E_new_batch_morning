var language = ["hindi","english","french","tamil","telugu","kannada","bengali","punjabi"];

// let flag = false;

// for(let i=0;i<language.length;i++){

//     if(language[i].length > 4){
//         flag = true;
//     }
// }

// console.log(flag);

// every : boolean

// let x = language.every((lang)=>{
//     return lang.length > 6;
// })

// console.log(x);

let x = language.every((lang)=> lang.startsWith("f"))
console.log(x);

