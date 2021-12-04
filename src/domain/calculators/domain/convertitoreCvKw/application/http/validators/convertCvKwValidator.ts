import { expressValidator } from '../../../../../../shared/infrastructure/http/validators/expressValidator'

export const convertCvKwValidator = expressValidator({
    powerUnit: {
        in: ['body'],
        isIn: { options: ['CV', 'kW'] },
    },
    powerValue: {
        in: ['body'],
        isInt: {
            options: { gt: 0 },
        },
    },
})
