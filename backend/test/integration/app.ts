import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import routes from '../../src/routes'
import express, { json } from 'express'

dotenv.config()

const app = express()

app.use(json())
app.use('/' + process.env.API_PREFIX, routes)

mongoose.connect(process.env.MONGODB_URI!)

export { app }