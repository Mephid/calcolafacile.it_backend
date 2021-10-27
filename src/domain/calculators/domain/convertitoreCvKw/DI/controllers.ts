import { ConvertCvToKwController } from '../application/http/controllers/ConvertCvToKwController'
import { ConvertKwToCvController } from '../application/http/controllers/ConvertKwToCvController'

import useCase from './useCases'

const convertCvToKwController = new ConvertCvToKwController(
    useCase.convertCvToKw
)
const convertKwToCvController = new ConvertKwToCvController(
    useCase.convertKwToCv
)

export default { convertCvToKwController, convertKwToCvController }
