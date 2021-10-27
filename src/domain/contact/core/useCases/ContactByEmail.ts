import { EmailInfo } from '../entities/EmailInfo'
import { IContactByEmail } from '../ports/in/IContactByEmail'
import { IMailingServiceAdapter } from '../ports/out/IMailingServiceAdapter'

export interface InputModel {
    senderEmail: string
    subject: string
    content: string
    senderName?: string
}

export class ContactByEmail implements IContactByEmail {
    constructor(private mailingService: IMailingServiceAdapter) {}

    async execute(payload: InputModel): Promise<void> {
        const { content, senderEmail, subject, senderName } = payload

        const email: EmailInfo = new EmailInfo(
            senderEmail,
            subject,
            content,
            senderName
        )

        await this.mailingService.sendMessage(email)
    }
}
