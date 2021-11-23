import * as express from 'express'
import { IConvertKwToCv } from '../../../core/ports/in/IConvertKwToCv'

export class ConvertKwToCvController {
    constructor(private useCase: IConvertKwToCv) {}

    execute = (req: express.Request, res: express.Response): void => {
        const { kw } = req.body

        const result = this.useCase.execute({ kw })

        res.status(200).json(result)
    }
}
