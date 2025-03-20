import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import routes from './src/routes'
import express, { json } from 'express'

dotenv.config()

const app = express()

app.use(json())
app.use('/' + process.env.API_PREFIX, routes)

mongoose.connect(process.env.MONGODB_URI!).then(() => {
  console.log('Connected to Database')
  app.listen(process.env.PORT, () => {
    console.log(`Server is listenig on port ${process.env.PORT}`)
  })
}).catch((error) => {
  console.log('Database connection error occured', error)
})