import * as express from 'express'
import { IConvertCvToKw } from '../../../core/ports/in/IConvertCvToKw'

export class ConvertCvToKwController {
    constructor(private useCase: IConvertCvToKw) {}

    execute = (req: express.Request, res: express.Response): void => {
        const { cv } = req.body

        const result = this.useCase.execute({ cv })

        res.status(200).json(result)
    }
}
