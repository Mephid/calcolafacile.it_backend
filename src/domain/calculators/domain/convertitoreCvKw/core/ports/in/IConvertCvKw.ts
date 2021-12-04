import {
    ConvertCvKwInputModel,
    ConvertCvKwOutputModel,
} from '../../useCases/ConvertCvKw'

export interface IConvertCvKw {
    execute(payload: ConvertCvKwInputModel): ConvertCvKwOutputModel
}
