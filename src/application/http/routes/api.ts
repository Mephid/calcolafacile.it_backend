import { Router } from 'express'
import calculatorsRoutes from '../../../domain/calculators/application/http/calculatorsRoutes'
import contactsRoutes from '../../../domain/contact/application/http/routes/contactRoutes'

const router = Router()

router.use('/api', [calculatorsRoutes, contactsRoutes])

export default router
