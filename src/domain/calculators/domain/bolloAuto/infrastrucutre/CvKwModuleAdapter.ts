import { convertitoreCvKwService } from '../../convertitoreCvKw/convertitoreCvKwService'

export class CvKwModuleAdapter {
    public convertCvToKw(cv: number): number {
        const response = convertitoreCvKwService.convertCvToKw.execute({ cv })

        return response.kw
    }
}
