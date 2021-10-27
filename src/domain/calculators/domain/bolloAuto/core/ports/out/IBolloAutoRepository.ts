import { EuroCategory } from '../../enums/EuroCategory'
import { Region } from '../../enums/Region'

export interface IBolloAutoRepository {
    getUnitPrice(
        euroCategory: EuroCategory,
        region: Region,
        power: number
    ): { low: number; high: number }
}
