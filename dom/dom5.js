function readTxt(){
    let txt = document.getElementById("txt")
    // console.log(txt.value);

    let output = document.getElementById("output")

    if(txt.value.length < 4){
        // alert("Name too short");
        output.innerHTML = "Name too short";
        output.style.color = "red"
        txt.style.outlineColor = "red"
    }
    else{
        output.innerHTML = txt.value
        output.style.color = "green"
        txt.style.outlineColor = "green"
    }
    
}