import {
    ConvertKwToCvInputModel,
    ConvertKwToCvOutputModel,
} from '../../useCases/ConvertKwToCv'

export interface IConvertKwToCv {
    execute(payload: ConvertKwToCvInputModel): ConvertKwToCvOutputModel
}
