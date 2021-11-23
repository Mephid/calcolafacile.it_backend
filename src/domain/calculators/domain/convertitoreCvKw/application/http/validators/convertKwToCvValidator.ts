import { expressValidator } from '../../../../../../shared/infrastructure/http/validators/expressValidator'

export const convertKwToCvValidator = expressValidator({
    kw: {
        in: ['body'],
        isInt: {
            options: { gt: 0 },
        },
    },
})
