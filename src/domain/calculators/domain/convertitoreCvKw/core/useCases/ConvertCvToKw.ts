import { IConvertCvToKw } from '../ports/in/IConvertCvToKw'
import { CvToKwConverter } from '../entities/CvToKwConverter'

export interface ConvertCvToKwInputModel {
    cv: number
}

export interface ConvertCvToKwOutputModel {
    kw: number
}

export class ConvertCvToKw implements IConvertCvToKw {
    execute(payload: ConvertCvToKwInputModel): ConvertCvToKwOutputModel {
        const converter = new CvToKwConverter(payload.cv)
        return { kw: converter.convertValueToKw() }
    }
}
