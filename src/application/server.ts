import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

import apiRoutes from './http/routes/api'
import handleHttpError from './http/errorHandlers/handleHttpError'

const app = express()
const PORT = process.env.PORT || 5000

app.use(
    cors({
        origin:
            process.env.NODE_ENV === 'development'
                ? 'http://localhost:3000'
                : 'https://www.calcolafacile.it',
    })
)

app.use(helmet())

app.use(express.json())

app.use([apiRoutes])

app.use(handleHttpError)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
