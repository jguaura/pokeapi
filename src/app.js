import express, { json } from 'express'
import morgan from 'morgan'
import compression from 'compression'
import cors from 'cors'
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
// import responseTime from 'response-time'

// Routes import
import pokemonRoutes from './routes/pokemon'

// Swagger options
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "testesr12123",
            version: "0.1.0",
            description: "lremessaskdkasdakdwmkalwfakmdks",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "LogRocket",
                url: "https://logrocket.com",
                email: "info@email.com",
            },
        },
        servers: [
            {
                url: "http://localhost:8080/api"
            }
        ],
    },
    apis: ['./app.js']
}

const specs = swaggerJsDoc(options)

// Initialization
const app = express()

// Middlewares
// app.use(responseTime())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://www.jguaura.ml"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(morgan('dev'))
app.use(compression())
app.use(json())

// Routes use

/**
 * @swagger
 *  /api/demo:
 *  get:
 *  description: get demo
 *    responses:
 *       '200':
 *         description: ok response 
 */

app.get('/api/demo', (req, res) => res.send('okidoki'))
app.use('/api/documentation', swaggerUI.serve, swaggerUI.setup(specs))
app.use('/api/pokemon', pokemonRoutes)

export default app