import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

import handleHttpError from './http/handlers/handleHttpError'
import apiRoutes from './http/routes/api'

const app = express()
const PORT = process.env.PORT || 5000

app.use(
    cors({
        origin:
            process.env.NODE_ENV === 'development'
                ? 'http://localhost:3000'
                : 'https://calcolafacile.it',
    })
)

app.use(helmet())

app.use(express.json())

app.use([apiRoutes])

app.use(handleHttpError)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
