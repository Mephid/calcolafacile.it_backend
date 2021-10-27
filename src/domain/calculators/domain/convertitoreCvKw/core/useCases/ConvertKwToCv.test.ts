import { ConvertKwToCv } from './ConvertKwToCv'

const convertKwToCv = new ConvertKwToCv()

describe('Convert CV to KW', () => {
    it('should convert CV to KW', () => {
        const convertedCv = convertKwToCv.execute({ kw: 1 })
        expect(convertedCv.cv).toBeCloseTo(1.36, 1)
    })
})
