const app = require("./app")
const db = require('./models/db')
const port = 8000

db.connectDB()

const server= app.listen(port, () =>{ 
    console.log(`Example app listening on port port`)
})   


process.on("uncaughtException",err =>{
    console.log(`Error: ${err.stack}`)
    console.log("Shutting down server due to uncaughtException")
    server.close(()=>{
        process.exit(1)
    }) 
})     

process.on("unhandledRejection",err =>{
    console.log(`Error: ${err.message}`)
    console.log("Shutting down server due to unhandledRejection")
    server.close(()=>{
        process.exit(1)
    }) 
})     