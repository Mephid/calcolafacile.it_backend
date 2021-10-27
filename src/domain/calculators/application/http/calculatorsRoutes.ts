import { Router } from 'express'

import bolloAutoRoutes from '../../domain/bolloAuto/application/http/routes/bolloAutoRoutes'
import convertitoreCvKwRoutes from '../../domain/convertitoreCvKw/application/http/routes/convertitoreCvKwRoutes'
import percentageRoutes from '../../domain/percentuale/application/http/routes/percentualeRoutes'

const router = Router()

router.use('/calculators', [
    bolloAutoRoutes,
    convertitoreCvKwRoutes,
    percentageRoutes,
])

export default router
