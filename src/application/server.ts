import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

import apiRoutes from './http/routes/api'
import { handleHttpError } from './http/errorHandlers/handleHttpError'

const app = express()

app.use(cors({ origin: 'https://www.calcolafacile.it' }))

app.use(helmet())

app.use(express.json())

app.use([apiRoutes])

app.use(handleHttpError)

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})
