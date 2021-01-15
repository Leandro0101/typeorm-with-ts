import express from 'express'
import route from './routes'
const app = express()
import "reflect-metadata";
import "./typeorm"
app.use(express.json())
app.use(route)

export default app