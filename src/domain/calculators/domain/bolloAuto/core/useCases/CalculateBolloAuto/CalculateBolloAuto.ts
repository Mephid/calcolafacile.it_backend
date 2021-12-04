import { BolloAutoCalculator } from '../../entities/BolloAutoCalculator'
import { EuroCategory } from '../../enums/EuroCategory'
import { Region } from '../../enums/Region'
import { Unit } from '../../enums/Unit'
import { CvKwModuleAdapter } from '../../../infrastrucutre/CvKwModuleAdapter'
import { IBolloAutoRepository } from '../../ports/out/IBolloAutoRepository'
import { ICalculateBolloAuto } from '../../ports/in/ICalculateBolloAuto'

export interface CalculateBolloAutoInputModel {
    region: Region
    power: number
    unit: Unit
    euroCategory: EuroCategory
}

export interface CalculateBolloAutoOutputModel {
    result: number
}

export class CalculateBolloAuto implements ICalculateBolloAuto {
    constructor(
        private bolloTabsRepository: IBolloAutoRepository,
        private cvKwConverter: CvKwModuleAdapter
    ) {}

    public execute(
        payload: CalculateBolloAutoInputModel
    ): CalculateBolloAutoOutputModel {
        const power = this.getConvertedPower(payload.unit, payload.power)
        const unitPrice = this.getUnitPrice(
            payload.euroCategory,
            payload.region,
            power
        )

        const bolloPrice = this.getCalculationResult(power, unitPrice)

        return { result: bolloPrice }
    }

    private getConvertedPower(unit: Unit, power: number): number {
        return unit === Unit.CV
            ? this.cvKwConverter.convertCvKw(unit, power.toString())
            : power
    }

    private getUnitPrice(
        euroCategory: EuroCategory,
        region: Region,
        power: number
    ) {
        return this.bolloTabsRepository.getUnitPrice(
            euroCategory,
            region,
            power
        )
    }

    private getCalculationResult(
        power: number,
        unitPrice: { low: number; high: number }
    ): number {
        const bolloAutoCalculator: BolloAutoCalculator =
            new BolloAutoCalculator(unitPrice, power)
        return bolloAutoCalculator.calculate()
    }
}
