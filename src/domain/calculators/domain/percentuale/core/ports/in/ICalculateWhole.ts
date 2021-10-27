import {
    CalculateWholeInputModel,
    CalculateWholeOutputModel,
} from '../../useCases/CalculateWhole'

export interface ICalculateWhole {
    execute(payload: CalculateWholeInputModel): CalculateWholeOutputModel
}
