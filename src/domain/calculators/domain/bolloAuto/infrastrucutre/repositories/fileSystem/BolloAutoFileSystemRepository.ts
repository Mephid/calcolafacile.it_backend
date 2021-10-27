import { EuroCategory } from '../../../core/enums/EuroCategory'
import { Region } from '../../../core/enums/Region'
import { IBolloAutoRepository } from '../../../core/ports/out/IBolloAutoRepository'

export class BolloAutoFileSystemRepository implements IBolloAutoRepository {
    constructor(
        private dataStore: {
            standardTab: any[]
            piemonteTab: { tariffe: any[] }
        }
    ) {}

    public getUnitPrice(
        euroCategory: EuroCategory,
        region: Region,
        power: number
    ): { low: number; high: number } {
        return region === Region.PIEMONTE
            ? this.getPiemonteUnitPrice(euroCategory, power)
            : this.getStandardUnitPrice(euroCategory, region)
    }

    private getStandardUnitPrice(
        euroCategory: EuroCategory,
        region: Region
    ): { low: number; high: number } {
        const regionTab = this.dataStore.standardTab.find(
            (tab: { regioni: any[] }) =>
                tab.regioni.find((cursor: Region) => cursor === region)
        )

        const regionPrices = regionTab?.tariffe.find(
            (tariffa: { classeEuro: any[] }) => {
                return tariffa.classeEuro.find(
                    (category: EuroCategory) => category === euroCategory
                )
            }
        )?.prezzi

        const result = {
            low: 0,
            high: 0,
        }

        if (regionPrices) {
            result.low = regionPrices[0]
            result.high = regionPrices[1]
        }

        return result
    }

    private getPiemonteUnitPrice(
        euroCategory: EuroCategory,
        power: number
    ): { low: number; high: number } {
        const regionPrices = this.dataStore.piemonteTab.tariffe.find(
            (tariffa: { classeEuro: any[] }) => {
                return tariffa.classeEuro.find(
                    (category: EuroCategory) => category === euroCategory
                )
            }
        )?.prezzi

        const result = {
            low: 0,
            high: 0,
        }

        if (regionPrices) {
            const powerPrices =
                power > 130
                    ? regionPrices[2]
                    : power > 100
                    ? regionPrices[1]
                    : regionPrices[0]

            result.low = powerPrices[0]
            result.high = powerPrices[1]
        }

        return result
    }
}
