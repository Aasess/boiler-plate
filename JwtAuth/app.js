import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDb } from './config/connectDb.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
const port = process.env.PORT

const app = express()

//use cors middleware for now(since we will be using postman lateron)
app.use(cors())

//middleware to use req.body
app.use(express.urlencoded()) //parse application/x-www-form-urlencoded

app.use(express.json()) //parse application/json

//connect to db
connectDb()

//load routes
app.use('/api/user', userRoutes)

app.listen(port, () => {
  console.log(`server is running at port:${port}`)
})
