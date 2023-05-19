import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import indexRoutes from './routes/index.routes.js'
import noticiasRoutes from './routes/noticias.routes.js'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


app.use(indexRoutes)
app.use(noticiasRoutes)

export default app