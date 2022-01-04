export interface IDirection{
    value: string;
    directionMatching(value: string): void;
    right(): void;
    left(): void;
}
