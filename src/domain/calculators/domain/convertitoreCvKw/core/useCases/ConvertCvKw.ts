import { IConvertCvKw } from '../ports/in/IConvertCvKw'
import { CvKwConverter } from '../entities/CvKwConverter'

export interface ConvertCvKwInputModel {
    powerUnit: string
    powerValue: string
}

export interface ConvertCvKwOutputModel {
    convertedValue: number
}

export class ConvertCvKw implements IConvertCvKw {
    private calculateResult(converter: CvKwConverter, unit: string): number {
        let result = 0

        if (unit === 'CV') {
            result = converter.convertValueToKw()
        } else if (unit === 'kW') {
            result = converter.convertValueToCv()
        } else {
            throw new Error('Wrong value provided.')
        }

        return result
    }

    execute(payload: ConvertCvKwInputModel): ConvertCvKwOutputModel {
        const converter = new CvKwConverter(payload.powerValue)
        return {
            convertedValue: this.calculateResult(converter, payload.powerUnit),
        }
    }
}
