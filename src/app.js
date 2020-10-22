import express, { json } from 'express'
import morgan from 'morgan'
import compression from 'compression'
import cors from 'cors'
// import responseTime from 'response-time'

// Routes import
import pokemonRoutes from './routes/pokemon'

// Initialization
const app = express()

// Middlewares
// app.use(responseTime())
app.use(cors())
app.use(morgan('dev'))
app.use(compression())
app.use(json())

// Routes use
app.get('/', function(req, res) {
    res.json({message: 'ok'})
})
app.use('/api/pokemon', pokemonRoutes)

export default app