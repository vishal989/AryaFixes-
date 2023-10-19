import express from 'express'
import mongoose from 'mongoose'
import cors from "cors"
import dotenv from 'dotenv'
import hospitalRoutes from "./routes/hospitalRoutes.js"

dotenv.config()
const app = express()



app.use(cors())
app.use(express.json())
app.use("/hospital", hospitalRoutes)

mongoose.connect(process.env.MONGO_STRING, { dbName: "hospitalSys" })

app.listen(process.env.PORT, () => {
    console.log("I am connected")
})