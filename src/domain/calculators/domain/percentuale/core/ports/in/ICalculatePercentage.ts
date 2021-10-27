import {
    CalculatePercentageInputModel,
    CalculatePercentageOutputModel,
} from '../../useCases/CalculatePercentage'

export interface ICalculatePercentage {
    execute(
        payload: CalculatePercentageInputModel
    ): CalculatePercentageOutputModel
}
