import { expressValidator } from '../../../../../../shared/infrastructure/http/validators/expressValidator'

export const convertCvToKwValidator = expressValidator({
    'payload.cv': {
        in: ['body'],
        isInt: {
            options: { gt: 0 },
        },
    },
})
