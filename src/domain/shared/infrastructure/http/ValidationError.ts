import { BaseHttpException } from '../../../../application/http/BaseHttpException'

export class ValidationError extends BaseHttpException {
    constructor(fields: Array<string>) {
        super(
            400,
            `Invalid values provided. Please check this fields: ${fields.join(
                ', '
            )}`
        )
    }
}
