import { expressValidator } from '../../../../../../shared/infrastructure/http/validators/expressValidator'

export const calculateWholeValidator = expressValidator({
    'payload.perc': {
        in: ['body'],
        isInt: {
            options: { gt: 0 },
        },
    },
    'payload.part': {
        in: ['body'],
        isInt: {
            options: { gt: 0 },
        },
    },
})
