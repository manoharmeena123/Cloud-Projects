const express = require("express")
const app = express()

app.use(express.json())



app.get("/get",(req,res)=>{
    res.json("Welcome to AWS")

})



app.listen(8000,()=>console.log("Server on 8000"))