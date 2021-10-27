import { Router } from 'express'

import controller from '../../../DI/controllers'

import { contactByEmailValidator } from '../validators/contactByEmailValidator'

const router = Router()

router.post(
    '/contact/email',
    ...contactByEmailValidator,
    controller.contactByEmail.execute
)

export default router
