// Date : class ---> object

const getDate = ()=>{

    // let date = new Date()
    // console.log(date);
    // console.log("date ----> ",date.getDate());
    // console.log("month ----> ",date.getMonth()+1);
    // console.log("year ----> ",date.getFullYear());
    // console.log("hours ----> ",date.getHours());
    // console.log("minutes ----> ",date.getMinutes());
    // console.log("seconds ----> ",date.getSeconds());
    // console.log("milliseconds ----> ",date.getMilliseconds());
    // console.log("day of the week ----> ",date.getDay());
    // console.log("time ....",date.getTime());
    
    

    let date2 = new Date();
    date2.setFullYear(2022);
    date2.setMonth(1);
    date2.setDate(1);
    date2.setHours(8);
    date2.setMinutes(24);
    date2.setSeconds(45);
    console.log(date2);
    
}

getDate()