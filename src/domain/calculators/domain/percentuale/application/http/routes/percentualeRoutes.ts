import { Router } from 'express'

import controller from '../../../DI/controllers'

import { calculatePartValidator } from '../validators/calculatePartValidator'
import { calculatePercentageValidator } from '../validators/calculatePercentageValidator'
import { calculateWholeValidator } from '../validators/calculateWholeValidator'

const router = Router()

router.post(
    '/percentage/perc',
    ...calculatePercentageValidator,
    controller.calculatePercentageController.execute
)

router.post(
    '/percentage/whole',
    ...calculateWholeValidator,
    controller.calculateWholeController.execute
)

router.post(
    '/percentage/part',
    ...calculatePartValidator,
    controller.calculatePartController.execute
)

export default router
