import { expressValidator } from '../../../../../../shared/infrastructure/http/validators/expressValidator'

export const convertKwToCvValidator = expressValidator({
    'payload.kw': {
        in: ['body'],
        isInt: {
            options: { gt: 0 },
        },
    },
})
