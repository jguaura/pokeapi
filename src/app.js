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

// Initialization
const app = express()

// Middlewares

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1){
            var msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.'
            return callback(new Error(msg), false)
        }
    return callback(null, true)
    }
}))
app.use(morgan('dev'))
app.use(compression())
app.use(json())

// Routes use
app.use('/api/pokemon', pokemonRoutes)

export default app