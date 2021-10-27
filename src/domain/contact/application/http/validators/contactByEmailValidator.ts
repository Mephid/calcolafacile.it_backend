import { expressValidator } from '../../../../shared/infrastructure/http/validators/expressValidator'

export const contactByEmailValidator = expressValidator({
    'payload.senderEmail': {
        in: ['body'],
        trim: true,
        notEmpty: { bail: true },
        isEmail: true,
        normalizeEmail: true,
    },
    'payload.subject': {
        in: ['body'],
        trim: true,
        notEmpty: { bail: true },
        isString: true,
        escape: true,
    },
    'payload.content': {
        in: ['body'],
        trim: true,
        notEmpty: { bail: true },
        isString: true,
        escape: true,
    },
    'payload.senderName': {
        in: ['body'],
        trim: true,
        optional: true,
        notEmpty: { bail: true },
        isString: true,
        escape: true,
    },
})
