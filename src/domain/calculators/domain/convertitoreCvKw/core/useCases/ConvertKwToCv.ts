import { CvToKwConverter } from '../entities/CvToKwConverter'
import { IConvertKwToCv } from '../ports/in/IConvertKwToCv'

export interface ConvertKwToCvInputModel {
    kw: number
}

export interface ConvertKwToCvOutputModel {
    cv: number
}

export class ConvertKwToCv implements IConvertKwToCv {
    execute(payload: ConvertKwToCvInputModel): ConvertKwToCvOutputModel {
        const converter = new CvToKwConverter(payload.kw)
        return { cv: converter.convertValueToCv() }
    }
}
