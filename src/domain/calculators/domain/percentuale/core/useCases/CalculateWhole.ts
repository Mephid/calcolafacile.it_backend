import { PercentageCalculator } from '../entities/PercentageCalculator'
import { ICalculateWhole } from '../ports/in/ICalculateWhole'

export interface CalculateWholeInputModel {
    part: number
    perc: number
}

export interface CalculateWholeOutputModel {
    whole: number
}

export class CalculateWhole implements ICalculateWhole {
    execute(payload: CalculateWholeInputModel): CalculateWholeOutputModel {
        const percentageCalculator = new PercentageCalculator(
            payload.part,
            payload.perc
        )

        const whole = percentageCalculator.calculateWhole()

        return { whole }
    }
}
