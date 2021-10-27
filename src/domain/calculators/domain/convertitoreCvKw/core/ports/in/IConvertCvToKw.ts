import {
    ConvertCvToKwInputModel,
    ConvertCvToKwOutputModel,
} from '../../useCases/ConvertCvToKw'

export interface IConvertCvToKw {
    execute(payload: ConvertCvToKwInputModel): ConvertCvToKwOutputModel
}
