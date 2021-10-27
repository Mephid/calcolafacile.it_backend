import {
    InputModel,
    OutputModel,
} from '../../useCases/CalculateBolloAuto/CalculateBolloAuto'

export interface ICalculateBolloAuto {
    execute(payload: InputModel): OutputModel
}
