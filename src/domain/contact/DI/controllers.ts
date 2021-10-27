import { ContactByEmailController } from '../application/http/controllers/ContactByEmailController'
import useCase from './useCases'

const contactByEmail = new ContactByEmailController(useCase.contactByEmail)

export default { contactByEmail }
