import * as express from 'express'
import { IConvertCvKw } from '../../../core/ports/in/IConvertCvKw'

export class ConvertCvKwController {
    constructor(private useCase: IConvertCvKw) {}

    execute = (req: express.Request, res: express.Response): void => {
        const { powerUnit, powerValue } = req.body

        const result = this.useCase.execute({ powerUnit, powerValue })

        res.status(200).json(result)
    }
}
