var language = ["hindi","english","french","tamil","telugu","kannada","bengali","punjabi"];

let x = language.filter((lang)=>{
    return lang != "telugu"
})

console.log(x);
