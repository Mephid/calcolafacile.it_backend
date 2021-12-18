import toDottedFloat from '../../../../../../shared/infrastructure/http/express-sanitizers/toDottedFloat'
import { expressValidator } from '../../../../../../shared/infrastructure/http/express-validators/expressValidator'

export const convertCvKwValidator = expressValidator({
    powerUnit: {
        in: ['body'],
        isIn: { options: [['kW', 'CV']] },
    },
    powerValue: {
        in: ['body'],
        isNumeric: true,
    },
})
