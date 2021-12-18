import { checkSchema, Schema } from 'express-validator'
import { expressValidatorErrorChecker } from './expressValidatorErrorChecker'

export const expressValidator = (schema: Schema) => [
    checkSchema(schema),
    expressValidatorErrorChecker,
]
