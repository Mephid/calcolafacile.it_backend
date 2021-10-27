import {
    CalculatePartInputModel,
    CalculatePartOutputModel,
} from '../../useCases/CalculatePart'

export interface ICalculatePart {
    execute(payload: CalculatePartInputModel): CalculatePartOutputModel
}
