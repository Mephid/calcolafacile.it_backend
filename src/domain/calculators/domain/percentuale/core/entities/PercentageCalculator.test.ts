import { PercentageCalculator } from './PercentageCalculator'

describe('Percentage calculator', () => {
    it('should calculate a% of b', () => {
        const percentageCalculator = new PercentageCalculator(10, 200)

        const part = percentageCalculator.calculatePart()

        expect(part).toBeCloseTo(20)
    })

    it('should calculate the whole if a is b%', () => {
        const percentageCalculator = new PercentageCalculator(9, 10)

        const whole = percentageCalculator.calculateWhole()

        expect(whole).toBeCloseTo(90)
    })

    it('should calculate what percentage of a is b', () => {
        const percentageCalculator = new PercentageCalculator(100, 50)

        const part = percentageCalculator.calculatePercentage()

        expect(part).toBeCloseTo(50)
    })
})
