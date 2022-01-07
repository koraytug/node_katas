import {DirectionType} from "./directionType";
import {IDirection} from "./idirection";

export class Direction implements IDirection {
    private directions: Record<string, { left: DirectionType; right: DirectionType }>;
    private currentDirection: DirectionType;
    private rightDirection: DirectionType;
    private leftDirection: DirectionType;

    constructor() {
        this.currentDirection = DirectionType.North;
        this.rightDirection = DirectionType.East;
        this.leftDirection = DirectionType.West;

        this.directions = {
            N: {left: DirectionType.West, right: DirectionType.East},
            E: {left: DirectionType.North, right: DirectionType.South},
            S: {left: DirectionType.East, right: DirectionType.West},
            W: {left: DirectionType.South, right: DirectionType.North}
        };
    }

    public direction(): DirectionType {
        return this.currentDirection;
    }

    public turnRight() {
        this.directionLocator(this.rightDirection);
        // if (this.currentDirection === "N") {
        //     this.currentDirection = "E";
        // } else if (this.currentDirection === "E") {
        //     this.currentDirection = "S";
        // } else if (this.currentDirection === "S") {
        //     this.currentDirection = "W";
        // } else {
        //     this.currentDirection = "N";
        // }
    }

    public turnLeft() {
        this.directionLocator(this.leftDirection);
        // if (this.currentDirection === "N") {
        //     this.currentDirection = "W";
        // } else if (this.currentDirection === "W") {
        //     this.currentDirection = "S";
        // } else if (this.currentDirection === "S") {
        //     this.currentDirection = "E";
        // } else {
        //     this.currentDirection = "N";
        // }
    }

    private directionLocator(nextDirection: DirectionType) {
        const direction = this.directions[nextDirection];

        if (direction) {
            this.currentDirection = nextDirection;
            this.leftDirection = direction.left;
            this.rightDirection = direction.right;
        }
    }
}
