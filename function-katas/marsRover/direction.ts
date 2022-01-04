export class Direction {
    public value: string;
    private getDirection: Record<string, { left: string; right: string }>;
    private rightValue: string;
    private leftValue: string;

    public constructor() {
        this.getDirection = {
            N: {left: "W", right: "E"},
            E: {left: "N", right: "S"},
            S: {left: "E", right: "W"},
            W: {left: "S", right: "N"}
        };

        this.rightValue = "E";
        this.leftValue = "W";
        this.value = "N";
    }

    public directionMatching(value: string): void {

        const direction = this.getDirection[value];
        if (direction) {
            this.value = value;
            this.rightValue = direction.right;
            this.leftValue = direction.left;
        }
    }

    public right(): void {
        return this.directionMatching(this.rightValue);
    }

    public left(): void {
        return this.directionMatching(this.leftValue);
    }


}
