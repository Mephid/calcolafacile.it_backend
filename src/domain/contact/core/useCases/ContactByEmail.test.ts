import { ContactByEmail } from './ContactByEmail'

import { mailerAdapter as fakeMailerAdapter } from '../../infrastructure/mailerAdapter/fakeMailerAdapter'

describe('Contact by Email', () => {
    let contactByEmail: ContactByEmail

    beforeEach(() => {
        contactByEmail = new ContactByEmail(fakeMailerAdapter)
    })

    it('should not throw error', async () => {
        let error

        try {
            await contactByEmail.execute({
                senderName: 'Resolve',
                subject: 'Subject',
                senderEmail: 'sender@email.com',
                content: 'content',
            })
        } catch (err) {
            error = err
        }
        expect(error).toBeUndefined()
    })

    it('should throw error if something fails', async () => {
        let error

        try {
            await contactByEmail.execute({
                senderName: 'reject',
                subject: 'Subject',
                senderEmail: 'sender@email.com',
                content: 'content',
            })
        } catch (err) {
            error = err
        }
        expect(error).toBeInstanceOf(Error)
    })
})
