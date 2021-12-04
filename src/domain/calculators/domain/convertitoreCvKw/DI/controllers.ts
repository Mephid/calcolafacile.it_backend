import { ConvertCvKwController } from '../application/http/controllers/ConvertCvKwController'

import useCase from './useCases'

const convertKwCvController = new ConvertCvKwController(useCase.convertCvKw)

export default {
    convertKwCvController,
}
