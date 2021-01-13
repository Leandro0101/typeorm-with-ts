import express from 'express'
import route from './routes'
const app = express()
import "reflect-metadata";
import '../ormconfig'

app.use(express.json())
app.use(route)

export default app