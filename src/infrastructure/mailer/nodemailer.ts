import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

const isDev =
    process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test'

const defaultOptions: SMTPTransport.Options = {
    host: 'smtps.aruba.it',
    port: 465,
    logger: isDev,
    debug: isDev,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PSW,
    },
    tls: {
        minVersion: 'TLSv1.2',
        rejectUnauthorized: !isDev,
    },
}

export const getTransporter = (
    options?: SMTPTransport.Options
): nodemailer.Transporter<SMTPTransport.SentMessageInfo> => {
    return nodemailer.createTransport(options || defaultOptions)
}
