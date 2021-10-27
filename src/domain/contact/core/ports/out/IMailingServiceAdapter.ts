import { EmailInfo } from '../../entities/EmailInfo'

export interface IMailingServiceAdapter {
    sendMessage(emailInfo: EmailInfo): Promise<void>
}
