export class CvToKwConverter {
    constructor(private value: number) {}

    public convertValueToCv(): number {
        return this.value * 1.36
    }

    public convertValueToKw(): number {
        return this.value / 1.36
    }
}
