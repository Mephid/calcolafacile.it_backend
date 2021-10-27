import { InputModel } from '../../useCases/ContactByEmail'

export interface IContactByEmail {
    execute(payload: InputModel): Promise<void>
}
