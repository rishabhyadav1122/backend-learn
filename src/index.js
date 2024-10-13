// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

connectDB()

























// import express from "express"
// const app = express()

//  async function connectDB(){
//   try {
//      await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     app.on("error", (error)=> {
//         console.log("Err",error)
//         throw error
//     })

//     app.listen(process.env.PORT,()=> {
//         console.log(`App is listening on port ${process.env.PORT}`)
//     })

//   } catch (error) {
//     console.error("Error : ",error)
//     throw err
//   }
// }

// connectDB()