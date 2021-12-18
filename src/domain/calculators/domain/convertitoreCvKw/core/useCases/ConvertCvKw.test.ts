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

    it('should convert KW to CV', () => {
        const convertedCv = convertCvKw.execute({
            powerValue: '0.73',
            powerUnit: 'kW',
        })
        expect(convertedCv.convertedValue).toBeCloseTo(1, 1)
    })
})
