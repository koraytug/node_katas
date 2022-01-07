export interface IRover{
    getPlateauSize(data: string[]): string;
    getRoversStartPosition(data: string[], rover: number): string;
    getRoverMoves(data: string[], rover: number): string;
    run(commands: string): string;
    // turnRight(): void;
    // turnLeft(): void;
}
