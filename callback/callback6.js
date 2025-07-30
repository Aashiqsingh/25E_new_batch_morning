const wordHandler = (option)=>{
    return option.fname + " handled with word Handler..."
}

const pdfHandler = (option)=>{
    return option.fname + " handled with pdf Handler..."
}

const pngHandler = (option)=>{
    return option.fname + " handled with png Handler..."
}

const jpgHandler = (option)=>{
    return option.fname + " handled with jpg Handler..."
}


const Handler = (file,cb)=>{
    // {fname:"test.pdf",size:"1000kb"} , pdfHandler
    let x = cb({
        fname:file.fname,
        size:file.size
    })

    console.log(x);
    
}

let fileName = "test.pdf";

if(fileName.endsWith(".word")){
    Handler({fname:fileName,size:"1000kb"},wordHandler)
}
else if(fileName.endsWith(".pdf")){
    Handler({fname:fileName,size:"1000kb"},pdfHandler)
}
else if(fileName.endsWith(".png")){
    Handler({fname:fileName,size:"1000kb"},pngHandler)
}
else if(fileName.endsWith(".jpg")){
    Handler({fname:fileName,size:"1000kb"},jpgHandler)
}
else{
    console.log("File type not supported")
}