const wordHandler = (option)=>{
    return option.fname + " handled with word Handler.."
}

const pngHandler = (option)=>{
    return option.fname + " handled with png Handler.."
}

const pdfHandler = (option)=>{
    return option.fname + " handled with pdf Handler.."
}

const jpgHandler = (option)=>{
    return option.fname + " handled with jpg Handler.."
}


var fileName = "abc.word";
let ans;

if(fileName.endsWith(".word")){
    ans = wordHandler({fname:fileName,size:"1000kb"})
}
else if(fileName.endsWith(".png")){
    ans = pngHandler({fname:fileName,size:"1000kb"})
}
else if(fileName.endsWith(".pdf")){
    ans = pdfHandler({fname:fileName,size:"1000kb"})
}
else if(fileName.endsWith(".jpg")){
    ans = jpgHandler({fname:fileName,size:"1000kb"})
}
else{
    console.log("file is not supported")
}

console.log(ans);
