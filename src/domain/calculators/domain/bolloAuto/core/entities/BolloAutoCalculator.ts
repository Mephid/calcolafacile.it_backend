export class BolloAutoCalculator {
    private bolloPrice: number

    constructor(
        private unitPrice: { low: number; high: number },
        private power: number
    ) {}

    public calculate(): number {
        this.power <= 100
            ? this.calculateLowPrice(this.power, this.unitPrice.low)
            : this.calculateHighPrice(
                  this.power,
                  this.unitPrice.low,
                  this.unitPrice.high
              )

        return this.bolloPrice
    }

    private calculateLowPrice(power: number, unitPrice: number): void {
        this.bolloPrice = power * unitPrice
    }

    private calculateHighPrice(
        power: number,
        lowUnitPrice: number,
        highUnitPrice: number
    ): void {
        const lowPrice = 100 * lowUnitPrice
        const highPrice = (power - 100) * highUnitPrice

        this.bolloPrice = lowPrice + highPrice
    }
}
