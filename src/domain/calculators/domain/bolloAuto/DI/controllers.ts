import { CalculateBolloAutoController } from '../application/http/controllers/CalculateBolloAutoController'
import useCase from './useCases'

const calculateBolloAuto = new CalculateBolloAutoController(
    useCase.calculateBolloAuto
)

export default { calculateBolloAuto }
