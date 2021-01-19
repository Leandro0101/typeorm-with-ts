import "reflect-metadata";
import connection from './typeorm'

import express from 'express'
import route from './routes'
const app = express()

connection().catch(err => console.log(err))

app.use(express.json())
app.use(route)

export default app 