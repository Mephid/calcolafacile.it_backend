import { expressValidator } from '../../../../../../shared/infrastructure/http/validators/expressValidator'

export const calculatePartValidator = expressValidator({
    perc: {
        in: ['body'],
        isNumeric: true,
    },
    whole: {
        in: ['body'],
        isNumeric: true,
    },
})
