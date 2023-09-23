// let getdata = async()=>{
//     let req = await fetch("https://dummyjson.com/products")
//     let res = await req.json()
//     console.log(res);
// }
// catch(error){
//     console.log(error);
// }
// try{
//     let req = await fetch("https://dummyjson.com/products")
// }

fetch("https://dummyjson.com/products")
.then((req)=>req.json())
.then((res)=>console.log(res.products))
.then((err)=>console.log(err))
.finally(()=>console.log("done"));

