import { validationResult } from 'express-validator'
import { ValidationError } from '../ValidationError'

export const expressValidatorErrorChecker = (req: any, res: any, next: any) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        next(
            new ValidationError(
                errors.array().map((err) => err.param.split('.')[1])
            )
        )
    } else {
        next()
    }
}
