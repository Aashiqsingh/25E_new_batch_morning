const getOrder = ()=>{
    console.log("Food is going to be prepared");
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                food:"Pizza",
                price:399,
                orderId:1234,
                message:"Order is ready"
            })
        },4000)
    })
}

const getPayement = (data)=>{
    console.log("Payment is going to be made");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                paymentId:data.orderId,
                message:"Payment is made",
                amount:data.price
            })
        },4000)
    })    
}


getOrder().then((res)=>{
    console.log("food order success....",res);
    getPayement(res).then((res)=>{
        console.log("payment success....",res);
    }).catch((err)=>{
        console.log("payment error....",err);
    })
}).catch((err)=>{
    console.log("food order error....",err);
})
