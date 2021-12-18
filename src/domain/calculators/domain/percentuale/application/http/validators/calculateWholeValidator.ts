import { expressValidator } from '../../../../../../shared/infrastructure/http/express-validators/expressValidator'

export const calculateWholeValidator = expressValidator({
    perc: {
        in: ['body'],
        isNumeric: true,
    },
    part: {
        in: ['body'],
        isNumeric: true,
    },
})
