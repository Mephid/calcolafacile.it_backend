import {
    CalculateBolloAutoInputModel,
    CalculateBolloAutoOutputModel,
} from '../../useCases/CalculateBolloAuto/CalculateBolloAuto'

export interface ICalculateBolloAuto {
    execute(
        payload: CalculateBolloAutoInputModel
    ): CalculateBolloAutoOutputModel
}
