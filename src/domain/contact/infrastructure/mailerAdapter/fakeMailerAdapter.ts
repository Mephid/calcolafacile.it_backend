import { EmailInfo } from '../../core/entities/EmailInfo'
import { MailNotSentException } from '../../core/exceptions/MailNotSentException'
import { IMailingServiceAdapter } from '../../core/ports/out/IMailingServiceAdapter'

export const mailerAdapter: IMailingServiceAdapter = {
    sendMessage: async (emailInfo: EmailInfo): Promise<void> => {
        try {
            if (emailInfo.senderName === 'reject') {
                await Promise.reject()
            } else {
                await Promise.resolve()
            }
        } catch (error) {
            throw new MailNotSentException()
        }
    },
}
