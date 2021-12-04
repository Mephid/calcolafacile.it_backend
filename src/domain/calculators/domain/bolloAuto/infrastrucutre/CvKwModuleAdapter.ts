import { convertitoreCvKwService } from '../../convertitoreCvKw/convertitoreCvKwService'

export class CvKwModuleAdapter {
    public convertCvKw(powerUnit: string, powerValue: string): number {
        const response = convertitoreCvKwService.convertCvKw.execute({
            powerUnit,
            powerValue,
        })

        return response.convertedValue
    }
}
