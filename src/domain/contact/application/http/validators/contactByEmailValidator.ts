import { expressValidator } from '../../../../shared/infrastructure/http/express-validators/expressValidator'

export const contactByEmailValidator = expressValidator({
    senderEmail: {
        in: ['body'],
        trim: true,
        notEmpty: { bail: true },
        isEmail: true,
        normalizeEmail: true,
    },
    subject: {
        in: ['body'],
        trim: true,
        optional: true,
        isString: true,
        escape: true,
    },
    content: {
        in: ['body'],
        trim: true,
        notEmpty: { bail: true },
        isString: true,
        escape: true,
    },
    senderName: {
        in: ['body'],
        trim: true,
        optional: true,
        isString: true,
        escape: true,
    },
})
