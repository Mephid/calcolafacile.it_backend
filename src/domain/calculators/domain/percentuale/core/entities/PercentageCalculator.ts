export class PercentageCalculator {
    constructor(private a: number, private b: number) {}

    /* What percentage of A is B? C% */
    public calculatePercentage(): number {
        return (this.b / this.a) * 100
    }

    /* What's the A% of B? C */
    public calculatePart(): number {
        return (this.a / 100) * this.b
    }

    /* What's the whole if A is B%? C*/
    public calculateWhole(): number {
        return (this.a * 100) / this.b
    }
}
