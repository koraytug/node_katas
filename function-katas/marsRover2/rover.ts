import {Coordinate} from "./coordinate";
// import {Grid} from "./grid";
import {ICoordinate} from "./icoordinate";
import {Direction} from "./direction";
// import {DirectionType} from "./directionType";
import {IDirection} from "./idirection";
import {IGrid} from "./igrid";
import {IRover} from "./irover";

export class Rover implements IRover {
    private direction: IDirection;
    // private x: number;
    // private y: number;
    private coordinate: ICoordinate;
    // private MAX_HEIGHT: number;
    // private MAX_WIDTH: number;
    private grid: IGrid;

    public constructor(grid: IGrid) {
        this.direction = new Direction();
        this.coordinate = new Coordinate(0, 0);
        // this.MAX_HEIGHT = 10;
        // this.MAX_WIDTH = 10;
        this.grid = grid;//new Grid();
    }

    public getRoversStartPosition(data: string[], rover: number):string {
        if (data && data.length >= ((rover * 2) + 1)) {
            return data[(rover * 2) - 1];
        }
        return "";
    }

    public getPlateauSize(data: string[]): string {
        if (data && data.length > 0) {
            return data[0];
        }
        return "";
    }

    public getRoverMoves(data: string[], rover: number):string {
        if (data && data.length >= ((rover * 2) + 1)) {
            return data[(rover * 2)];
        }
        return "";
    }

    public run(commands: string): string {
        const commandList = commands.split("");

        commandList.forEach(command => {
            if (command === "R") {
                this.direction.turnRight();
            }
            if (command === "L") {
                this.direction.turnLeft();
            }

            if (command === "M") {
                // this.coordinate = this.move();
                this.coordinate = this.grid.nextCoordinateFor(this.coordinate, this.direction);

            }


        });
        // return `${this.x}${this.y}${this.direction.direction()}`;
        return `${this.coordinate.x}${this.coordinate.y}${this.direction.direction()}`;


    }

    // public move(): ICoordinate {
    //     let y: number = this.coordinate.y();
    //     let x: number = this.coordinate.x();

    //     if (this.direction.direction() === DirectionType.North) {
    //         // y += 1;
    //         y = (y + 1) % this.MAX_HEIGHT;
    //     }

    //     if (this.direction.direction() === DirectionType.East) {
    //         // x += 1;
    //         x = (x += 1) % this.MAX_WIDTH;
    //     }

    //     if (this.direction.direction() === DirectionType.West) {
    //         // x = 9;
    //         // x = (x === 0) ? 9 : x - 1;
    //         x = (x > 1) ? x - 1 : this.MAX_WIDTH - 1;
    //     }

    //     if (this.direction.direction() === DirectionType.South) {
    //         // x = (x === 0) ? 9 : x - 1;
    //         y = (y > 1) ? y - 1 : this.MAX_HEIGHT - 1;
    //     }

    //     // return new Coordinate(0, y);
    //     return new Coordinate(x, y);
    // }
}
