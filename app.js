const express = require('express')
const cookieParser= require("cookie-parser")

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

app.all("*",(req, res,next) =>{
    res.status(404).json({
        status:"Failed", 
        message:`Cant find ${req.originalUrl} on this server`
    })
}) 

module.exports=app