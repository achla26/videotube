import  express  from "express";
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

const corsOptions = {
    origin: process.env.CROSS_ORIGIN,
    credentials: true, 
}

app.use(cors({ corsOptions }))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes

import userRouter from './routes/user.route.js'

// routes declaration
app.use("/api/v1/users" , userRouter)


export { app } //similar to export default app