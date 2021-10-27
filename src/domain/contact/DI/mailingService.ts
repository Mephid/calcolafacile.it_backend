import { NodemailerAdapter } from '../infrastructure/mailerAdapter/NodemailerAdapter'
import { getTransporter } from '../../../infrastructure/mailer/nodemailer'

const nodemailerTransporter = getTransporter()

const nodemailerMailingService = new NodemailerAdapter(nodemailerTransporter)

export default { nodemailerMailingService }
