import * as express from 'express'
import { IContactByEmail } from '../../../core/ports/in/IContactByEmail'

export class ContactByEmailController {
    constructor(private useCase: IContactByEmail) {}

    execute = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ): Promise<void> => {
        const { content, senderEmail, subject, senderName } = req.body

        try {
            await this.useCase.execute({
                content,
                senderEmail,
                subject,
                senderName,
            })
            res.status(200).json({ status: 'success' })
        } catch (err) {
            next(err)
        }
    }
}
