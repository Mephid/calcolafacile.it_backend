import { ConvertCvKw } from './ConvertCvKw'

const convertCvKw = new ConvertCvKw()

describe('Convert CV to KW', () => {
    it('should convert CV to KW', () => {
        const convertedCv = convertCvKw.execute({
            powerValue: '1',
            powerUnit: 'CV',
        })
        expect(convertedCv.convertedValue).toBeCloseTo(0.73, 1)
    })
})
