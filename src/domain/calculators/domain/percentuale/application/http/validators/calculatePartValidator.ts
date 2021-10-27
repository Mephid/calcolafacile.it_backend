import { expressValidator } from '../../../../../../shared/infrastructure/http/validators/expressValidator'

export const calculatePartValidator = expressValidator({
    'payload.perc': {
        in: ['body'],
        isInt: {
            options: { gt: 0 },
        },
    },
    'payload.whole': {
        in: ['body'],
        isInt: {
            options: { gt: 0 },
        },
    },
})
