import { ConvertCvToKw } from '../core/useCases/ConvertCvToKw'
import { ConvertKwToCv } from '../core/useCases/ConvertKwToCv'

const convertCvToKw = new ConvertCvToKw()
const convertKwToCv = new ConvertKwToCv()

export default { convertKwToCv, convertCvToKw }
