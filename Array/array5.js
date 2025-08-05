var language = ["hindi","english","french","tamil","telugu","kannada","bengali","punjabi"];


// map : it will return new array with same length

// let x = language.map((lang)=>{
//     return lang.toUpperCase()
// })

// console.log(x);

// let x = language.map((lang)=>{
//     return lang.length < 6
// })

// console.log(x);
// var x = []
// language.forEach((lang)=>{
//     x.push(lang.toUpperCase())
// })
// console.log(x);



// filter : it will return new array with modified data

let x = language.filter((lang)=>{
    return lang.length < 6
})
console.log(x);
