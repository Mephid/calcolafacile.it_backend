import { expressValidator } from '../../../../../../shared/infrastructure/http/express-validators/expressValidator'

export const calculatePercentageValidator = expressValidator({
    part: {
        in: ['body'],
        isNumeric: true,
    },
    whole: {
        in: ['body'],
        isNumeric: true,
    },
})
