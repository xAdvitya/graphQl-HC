import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send("message");   
})

app.listen(3000,console.log("running at 3000"))