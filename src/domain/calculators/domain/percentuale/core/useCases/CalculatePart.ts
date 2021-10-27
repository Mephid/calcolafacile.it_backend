import { PercentageCalculator } from '../entities/PercentageCalculator'
import { ICalculatePart } from '../ports/in/ICalculatePart'

export interface CalculatePartInputModel {
    perc: number
    whole: number
}

export interface CalculatePartOutputModel {
    part: number
}

export class CalculatePart implements ICalculatePart {
    execute(payload: CalculatePartInputModel): CalculatePartOutputModel {
        const percentageCalculator = new PercentageCalculator(
            payload.perc,
            payload.whole
        )

        const part = percentageCalculator.calculatePart()

        return { part }
    }
}
