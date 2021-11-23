import { expressValidator } from '../../../../../../shared/infrastructure/http/validators/expressValidator'
import { EuroCategory } from '../../../core/enums/EuroCategory'
import { Region } from '../../../core/enums/Region'
import { Unit } from '../../../core/enums/Unit'

export const calculateBolloAutoValidator = expressValidator({
    unit: {
        in: ['body'],
        custom: {
            options: (value) => {
                return Object.values(Unit).includes(value)
            },
        },
    },
    euroCategory: {
        in: ['body'],
        custom: {
            options: (value) => {
                return Object.values(EuroCategory).includes(value)
            },
        },
    },
    power: {
        in: ['body'],
        isInt: {
            options: { gt: 0 },
        },
    },
    region: {
        in: ['body'],
        custom: {
            options: (value) => {
                return Object.values(Region).includes(value)
            },
        },
    },
})
