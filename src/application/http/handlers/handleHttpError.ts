import express from 'express'

import { BaseHttpException } from '../BaseHttpException'

const handleHttpError = (
    error: BaseHttpException,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    const status = error.status || 500
    const message = error.message || 'Something went wrong'
    res.status(status).send({
        status,
        message,
    })
}

export default handleHttpError
