export class CvKwConverter {
    constructor(private value: string) {}

    public convertValueToCv(): number {
        return +this.value * 1.36
    }

    public convertValueToKw(): number {
        return +this.value / 1.36
    }
}
