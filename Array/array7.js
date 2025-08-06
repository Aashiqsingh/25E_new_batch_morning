var language = ["hindi","english","french","tamil","telugu","kannada","bengali","punjabi"];



// let x = language.map((lang)=>{
//     return lang.toUpperCase()
// })
// console.log(x);

// language.forEach((lang)=>{
//     console.log(lang.toUpperCase());
    
// })



// const deleteLanguage = (langName)=>{

//     let x = language.filter((lang)=>{
//         return lang != langName
//     })


//     return x;
// }


// let ans = deleteLanguage("bengali")
// console.log(ans);



// const deleteLanguage = (langName)=>{

//     return language.filter((lang)=>{
//         return lang != langName
//     })
// }


// let ans = deleteLanguage("punjabi")
// console.log(ans);


// const deleteLanguage = (langName)=>{

//     return language.filter((lang)=> lang != langName)
// }


// let ans = deleteLanguage("french")
// console.log(ans);



const deleteLanguage = (langName)=> language.filter((lang)=> lang != langName)



let ans = deleteLanguage("english")
// console.log(ans);