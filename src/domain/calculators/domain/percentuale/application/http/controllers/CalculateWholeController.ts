import * as express from 'express'
import { ICalculateWhole } from '../../../core/ports/in/ICalculateWhole'

export class CalculateWholeController {
    constructor(private useCase: ICalculateWhole) {}

    execute = (req: express.Request, res: express.Response): void => {
        const { part, perc } = req.body

        const result = this.useCase.execute({ part, perc })

        res.status(200).json(result)
    }
}
