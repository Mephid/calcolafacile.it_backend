import { PercentageCalculator } from '../entities/PercentageCalculator'
import { ICalculatePercentage } from '../ports/in/ICalculatePercentage'

export interface CalculatePercentageInputModel {
    whole: number
    part: number
}

export interface CalculatePercentageOutputModel {
    perc: number
}

export class CalculatePercentage implements ICalculatePercentage {
    execute(
        payload: CalculatePercentageInputModel
    ): CalculatePercentageOutputModel {
        const percentageCalculator = new PercentageCalculator(
            payload.whole,
            payload.part
        )

        const perc = percentageCalculator.calculatePercentage()

        return { perc }
    }
}
