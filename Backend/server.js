import express from "express";
import cors from "cors"



// ap config
const app = express()
const port = 4000 ||7000

// middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log('Server Started on http://localhost:7000')
})