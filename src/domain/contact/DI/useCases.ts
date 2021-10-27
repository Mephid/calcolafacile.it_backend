import { ContactByEmail } from '../core/useCases/ContactByEmail'

import mailingService from './mailingService'

const contactByEmail = new ContactByEmail(
    mailingService.nodemailerMailingService
)

export default { contactByEmail }
