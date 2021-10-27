import { expressValidator } from '../../../../../../shared/infrastructure/http/validators/expressValidator'

export const calculatePercentageValidator = expressValidator({
    'payload.part': {
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
