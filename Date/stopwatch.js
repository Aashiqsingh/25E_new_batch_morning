let hour = 0;
let min = 0;
let sec = 0;

let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");


const start2 = ()=>{
    sec++;
    // console.log(sec);
    if(sec == 60){
        sec = 0;
        min++;
    }
    else if(min == 60){
        min = 0;
        hour++;
    }

    hours.innerHTML = hour < 10 ? "0"+hour : hour;
    mins.innerHTML = min < 10 ? "0"+min : min;
    secs.innerHTML = sec < 10 ? "0"+sec : sec;
    
}




const start = ()=>{
    // start2()

    x = setInterval(()=>{
        start2()
    },1000)
}

const stop = ()=>{
    clearInterval(x)
}

const reset = ()=>{
    hour = 0;
    min = 0;
    sec = 0;

    hours.innerHTML = hour < 10 ? "0"+hour : hour;
    mins.innerHTML = min < 10 ? "0"+min : min;
    secs.innerHTML = sec < 10 ? "0"+sec : sec;

    clearInterval(x)
}