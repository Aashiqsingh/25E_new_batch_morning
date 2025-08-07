// var language = ["hindi","english","french","tamil","telugu","kannada","bengali","punjabi"];

// for(let i=0;i<language.length;i++){
//     console.log(language[i]);
// }

// language.forEach((lang)=>{
//     console.log(lang);
// })

// language.forEach((l)=>{
//     if(l.length > 6){
//         console.log(l);
//     }
// })

// let flag = false;
// for(let i=0;i<language.length;i++){

//     if(language[i].length < 6){
//         flag = true;
//     }
// }

// console.log(flag);

// var language = ["hindi","english","french","tami","telugu","kannada","bengali","punjabi"];

// some : boolean

// let x = language.some((lang)=>{
//     return lang.length < 5
// })

// console.log(x);

// let x = language.some((lang)=> lang.startsWith("p"))
// console.log(x);

// var language = ["hindi","english","french","tami","telugu","kannada","bengali","punjabi"];


// let flag = false;
// for(let i=0;i<language.length;i++){
//     if(language[i].length > 3){
//         flag = true;
//     }
// }
// console.log(flag);


// every : boolean

// let x = language.every((lang)=>{
//     return lang.length > 4
// })
// console.log(x);

// let x = language.every((lang)=> lang.startsWith("p"))
// console.log(x);


// var language = ["hindi","english","french","tami","telugu","kannada","bengali","punjabi"];

// map : it will return new array with same length

// let x = language.map((lang)=>{
//     return lang.toUpperCase()
// })

// console.log(x);

// let x = language.map((lang)=>{
//     return lang.length > 6
// })
// console.log(x);


// filter : it will return new array with modified data 

// let x = language.filter((lang)=>{
//     return lang.length > 6
// })
// console.log(x);


var language = ["hindi","english","french","tami","telugu","kannada","bengali","punjabi"];

// let x = language.filter((lang)=>{
//     return lang != "punjabi"
// })
// console.log(x);

// const deleteLanguage = (langName)=>{

//     let x = language.filter((lang)=>{
//         return lang != langName
//     })

//     return x;
// }

// let ans = deleteLanguage("english")
// console.log(ans);