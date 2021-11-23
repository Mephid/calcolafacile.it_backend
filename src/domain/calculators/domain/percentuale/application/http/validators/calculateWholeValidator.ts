import { expressValidator } from '../../../../../../shared/infrastructure/http/validators/expressValidator'

export const calculateWholeValidator = expressValidator({
    perc: {
        in: ['body'],
        isInt: {
            options: { gt: 0 },
        },
    },
    part: {
        in: ['body'],
        isInt: {
            options: { gt: 0 },
        },
    },
})
