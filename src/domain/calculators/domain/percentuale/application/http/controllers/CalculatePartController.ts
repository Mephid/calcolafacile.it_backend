import * as express from 'express'
import { ICalculatePart } from '../../../core/ports/in/ICalculatePart'

export class CalculatePartController {
    constructor(private useCase: ICalculatePart) {}

    execute = (req: express.Request, res: express.Response): void => {
        const { perc, whole } = req.body.payload

        const result = this.useCase.execute({ perc, whole })

        res.status(200).json(result)
    }
}
