function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data fetched successfully...")
        },4000)
    })
}

// getData().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })




// async function answer(){

//     console.log("starting....");
    

//     let x = await getData()
//     console.log(x);
    

//     console.log("ending....");
// }

// answer()




const answer = async()=>{

    console.log("starting....");
    

    let x = await getData()
    console.log(x);

    
    

    console.log("ending....");
}

answer()