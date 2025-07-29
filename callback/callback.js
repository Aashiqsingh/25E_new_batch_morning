function demo(){
    console.log("This is a demo function");
}


function test(x){
    // console.log(x);  
    x()  
}


// test(12)
// test("ram")
// test(12.44)
// test(true)


test(demo)