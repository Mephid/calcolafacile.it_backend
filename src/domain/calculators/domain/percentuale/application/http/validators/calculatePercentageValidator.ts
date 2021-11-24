import { expressValidator } from '../../../../../../shared/infrastructure/http/validators/expressValidator'

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
