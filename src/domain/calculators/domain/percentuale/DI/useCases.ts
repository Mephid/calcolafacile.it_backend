import { CalculatePart } from '../core/useCases/CalculatePart'
import { CalculateWhole } from '../core/useCases/CalculateWhole'
import { CalculatePercentage } from '../core/useCases/CalculatePercentage'

const calculatePart = new CalculatePart()
const calculateWhole = new CalculateWhole()
const calculatePercentage = new CalculatePercentage()

export default { calculatePart, calculateWhole, calculatePercentage }
