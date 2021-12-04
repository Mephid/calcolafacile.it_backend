import { Router } from 'express'

import controller from '../../../DI/controllers'

import { convertCvKwValidator } from '../validators/convertCvKwValidator'

const router = Router()

router.post(
    'cv-kw-converter',
    ...convertCvKwValidator,
    controller.convertKwCvController.execute
)

export default router
