import { expressValidator } from '../../../../../../shared/infrastructure/http/validators/expressValidator'

export const calculatePercentageValidator = expressValidator({
    part: {
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
