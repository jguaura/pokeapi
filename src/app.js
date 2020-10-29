import express, { json } from 'express'
import morgan from 'morgan'
import compression from 'compression'
import cors from 'cors'
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
// import responseTime from 'response-time'

// Routes import
import pokemonRoutes from './routes/pokemon'

const allowedOrigins = ['https://pokedex.jguaura.ml', 'https://jguaura.ml', 'https://www.pokedex.jguaura.ml', 'https://www.jguaura.ml']
const corsDelegate = function (req,callback) {
    let corsOptions;
    if (allowedOrigins.indexOf(req.heaader('Origin')) !== -1) {
        corsOptions = { origin: true }
    } else {
        corsOptions = { origin: false }
    }
    callback(null, corsOptions)
}

// Initialization
const app = express()

// Middlewares

app.use(cors(corsDelegate))
app.use(morgan('dev'))
app.use(compression())
app.use(json())

// Routes use
app.use('/api/pokemon', pokemonRoutes)

export default app