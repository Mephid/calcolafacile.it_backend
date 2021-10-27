import { Router } from 'express'

import controller from '../../../DI/controllers'

import { convertCvToKwValidator } from '../validators/convertCvToKwValidator'
import { convertKwToCvValidator } from '../validators/convertKwToCvValidator'

const router = Router()

router.post(
    '/kw-to-cv',
    ...convertKwToCvValidator,
    controller.convertKwToCvController.execute
)

router.post(
    '/cv-to-kw',
    ...convertCvToKwValidator,
    controller.convertCvToKwController.execute
)

export default router
