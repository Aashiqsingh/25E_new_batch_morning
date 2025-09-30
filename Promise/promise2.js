// const getData = ()=>{

//     let promise = new Promise((success,failure)=>{
//         setTimeout(()=>{
//             let flag = false;
//             if(flag){
//                 success({
//                     status:200,
//                     message:"Data fetched successfully",
//                 })
//             }else{
//                 failure({
//                     status:400,
//                     message:"Data not fetched",
//                 })
//             }
//         },4000)
//     })

//     // console.log(promise);
//     promise.then((res)=>{
//         console.log(res);
//     })
//     promise.catch((err)=>{
//         console.log(err);
//     })
    
// }


// getData()



// 









const getData = ()=>{

    return new Promise((success,failure)=>{
        setTimeout(()=>{
            let flag = true;
            if(flag){
                success({
                    status:200,
                    message:"Data fetched successfully",
                })
            }else{
                failure({
                    status:400,
                    message:"Data not fetched",
                })
            }
        },4000)
    })

    // console.log(promise);
    
    // return promise;
}

getData().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})













// let ans = getData()
// // console.log(ans);
// ans.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })




