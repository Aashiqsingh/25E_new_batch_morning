function getData(){


    console.log("starting.....");
    

    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("This is our program...");
            
            reject("Something went wrong...");
        },3000)
    })

    console.log(promise);
    promise.then((data)=>{
        console.log(data);
        console.log("ending.....");

    })
    promise.catch((err)=>{
        console.log(err);
        console.log("ending.....");

    })

    
}

getData()