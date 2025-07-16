var product = {
    id:1,
    name:"IPHONE",
    price:1000,
    color:["red","green","blue","white","black"],
    isAvailable:false,
    description:{
        size:"5.5",
        weight:100,
        brand:"apple",
        camera:"108px",
        ram:"8gb",
        battery:"5v"
    }
}

// console.log(product);
// console.log(product.name);
// console.log(product.price);
// console.log(product.color);
// console.log(product.color[0]);

// for(let i=0;i<product.color.length;i++){
//     console.log(product.color[i]);
    
// }

console.log(product.isAvailable == true ? "Available":"Not Available");
console.log(product.description);
console.log(product.description.brand);
console.log(product.description.camera);



