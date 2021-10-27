import { CalculatePartController } from '../application/http/controllers/CalculatePartController'
import { CalculatePercentageController } from '../application/http/controllers/CalculatePercentageController'
import { CalculateWholeController } from '../application/http/controllers/CalculateWholeController'

import useCases from './useCases'

const calculatePartController = new CalculatePartController(
    useCases.calculatePart
)
const calculatePercentageController = new CalculatePercentageController(
    useCases.calculatePercentage
)
const calculateWholeController = new CalculateWholeController(
    useCases.calculateWhole
)

export default {
    calculatePartController,
    calculateWholeController,
    calculatePercentageController,
}
