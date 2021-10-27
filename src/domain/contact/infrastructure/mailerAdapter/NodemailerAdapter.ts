import { IMailingServiceAdapter } from '../../core/ports/out/IMailingServiceAdapter'

import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import { EmailInfo } from '../../core/entities/EmailInfo'
import { MailNotSentException } from '../../core/exceptions/MailNotSentException'

export class NodemailerAdapter implements IMailingServiceAdapter {
    constructor(
        private nodemailerTransporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo>
    ) {}

    async sendMessage(emailInfo: EmailInfo): Promise<void> {
        const message = {
            from: {
                name: emailInfo.senderName,
                address: emailInfo.senderEmail,
            },
            to: process.env.CONTACT_EMAIL,
            subject: emailInfo.subject,
            text: emailInfo.content,
            replyTo: emailInfo.senderEmail,
        }

        try {
            await this.nodemailerTransporter.sendMail(message)
        } catch (error) {
            throw new MailNotSentException()
        }
    }
}
