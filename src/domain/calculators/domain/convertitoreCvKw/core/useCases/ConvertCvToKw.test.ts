import { ConvertCvToKw } from './ConvertCvToKw'

const convertCvToKw = new ConvertCvToKw()

describe('Convert CV to KW', () => {
    it('should convert CV to KW', () => {
        const convertedCv = convertCvToKw.execute({ cv: 1 })
        expect(convertedCv.kw).toBeCloseTo(0.73, 1)
    })
})
