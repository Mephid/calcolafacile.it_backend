import * as express from 'express'
import { ICalculateBolloAuto } from '../../../core/ports/in/ICalculateBolloAuto'

export class CalculateBolloAutoController {
    constructor(private useCase: ICalculateBolloAuto) {}

    execute = (req: express.Request, res: express.Response): void => {
        const { unit, euroCategory, power, region } = req.body.payload

        const result = this.useCase.execute({
            unit,
            euroCategory,
            power,
            region,
        })

        res.status(200).json(result)
    }
}
