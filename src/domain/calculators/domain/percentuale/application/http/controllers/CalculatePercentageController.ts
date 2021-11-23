import * as express from 'express'
import { ICalculatePercentage } from '../../../core/ports/in/ICalculatePercentage'

export class CalculatePercentageController {
    constructor(private useCase: ICalculatePercentage) {}

    execute = (req: express.Request, res: express.Response): void => {
        const { part, whole } = req.body

        const result = this.useCase.execute({ part, whole })

        res.status(200).json(result)
    }
}
