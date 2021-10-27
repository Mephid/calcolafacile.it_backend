import SMTPTransport from 'nodemailer/lib/smtp-transport'
import { getTransporter } from '../../../../infrastructure/mailer/nodemailer'
import { EmailInfo } from '../../core/entities/EmailInfo'
import { MailNotSentException } from '../../core/exceptions/MailNotSentException'
import { NodemailerAdapter } from './NodemailerAdapter'

const testOptions: SMTPTransport.Options = {
    host: 'smtps.aruba.it',
    port: 465,
    logger: true,
    debug: false,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PSW,
    },
    tls: {
        minVersion: 'TLSv1.2',
        rejectUnauthorized: true,
    },
}

describe.skip('Nodemailer adapter', () => {
    it('should send email', async () => {
        let error

        const nodemailerAdapter = new NodemailerAdapter(getTransporter())

        const emailInfo = new EmailInfo(
            'Email@test.it',
            'Test subject',
            'Test Content'
        )

        try {
            await nodemailerAdapter.sendMessage(emailInfo)
        } catch (err) {
            error = err
        }

        expect(error).not.toBeInstanceOf(Error)
    })

    it('should throw exception if error occurred', async () => {
        let error

        const nodemailerAdapter = new NodemailerAdapter(
            getTransporter(testOptions)
        )

        const emailInfo = new EmailInfo(
            'Email@test.it',
            'Test subject',
            'Test Content'
        )

        try {
            await nodemailerAdapter.sendMessage(emailInfo)
        } catch (err) {
            error = err
        }

        expect(error).toBeInstanceOf(MailNotSentException)
    })
})
