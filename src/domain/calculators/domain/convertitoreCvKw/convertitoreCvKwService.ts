import useCase from './DI/useCases'

export const convertitoreCvKwService = {
    convertCvToKw: useCase.convertCvToKw,
    convertKwToCv: useCase.convertKwToCv,
}
