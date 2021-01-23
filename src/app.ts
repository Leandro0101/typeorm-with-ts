import "reflect-metadata";
import Connection from './typeorm'

import express from 'express'
import route from './routes'
const app = express()

Connection.create().catch(err => console.log(err))

app.use(express.json())
app.use(route)

export default app 