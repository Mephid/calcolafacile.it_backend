import { EuroCategory } from '../../enums/EuroCategory'
import { Unit } from '../../enums/Unit'
import { Region } from '../../enums/Region'
import { CalculateBolloAuto } from './CalculateBolloAuto'
import { bolloAutoService } from '../../../bolloAutoService'

const bolloAutoCalculator: CalculateBolloAuto =
    bolloAutoService.calculateBolloAuto

describe('Bollo auto use case', () => {
    describe('Calculate', () => {
        it('should calculate bollo below 100 KW', () => {
            const calculatedBollo = bolloAutoCalculator.execute({
                euroCategory: EuroCategory.E0,
                power: 100,
                unit: Unit.KW,
                region: Region.SARDEGNA,
            })

            expect(calculatedBollo.result).toBe(300)
        })

        it('should calculate bollo above 100 KW', () => {
            const calculatedBollo = bolloAutoCalculator.execute({
                euroCategory: EuroCategory.E3,
                power: 101,
                unit: Unit.KW,
                region: Region.SARDEGNA,
            })

            expect(calculatedBollo.result).toBe(274.05)
        })

        it('should calculate bollo passing CV', () => {
            const calculatedBollo = bolloAutoCalculator.execute({
                euroCategory: EuroCategory.E0,
                power: 200,
                unit: Unit.CV,
                region: Region.SARDEGNA,
            })

            expect(calculatedBollo.result).toBeCloseTo(512, 0)
        })

        it('should calculate bollo for Piemonte', () => {
            const calculatedBollo = bolloAutoCalculator.execute({
                euroCategory: EuroCategory.E0,
                power: 200,
                unit: Unit.CV,
                region: Region.PIEMONTE,
            })

            expect(calculatedBollo.result).toBeCloseTo(563, 0)
        })
    })
})
