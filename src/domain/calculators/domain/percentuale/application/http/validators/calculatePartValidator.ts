import { expressValidator } from '../../../../../../shared/infrastructure/http/validators/expressValidator'

export const calculatePartValidator = expressValidator({
    perc: {
        in: ['body'],
        isInt: {
            options: { gt: 0 },
        },
    },
    whole: {
        in: ['body'],
        isInt: {
            options: { gt: 0 },
        },
    },
})
