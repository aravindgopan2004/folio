const express=require("express");
const app=express();



app.use(express.static('./public'));







app.listen(10000,()=>{
    console.log("here")

})