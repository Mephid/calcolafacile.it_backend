import { Router } from 'express'

import controller from '../../../DI/controllers'

import { calculateBolloAutoValidator } from '../validators/calculateBolloAutoValidator'

const router = Router()

router.post(
    '/bollo-auto',
    ...calculateBolloAutoValidator,
    controller.calculateBolloAuto.execute
)

export default router
