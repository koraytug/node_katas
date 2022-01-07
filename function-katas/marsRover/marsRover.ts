import {Coordinate} from "./coordinate";
import {Direction} from "./direction";
import {ICoordinate} from "./icoordinate";
import {IDirection} from "./idirection";
import {IGrid} from "./igrid";
import {IMarsRover} from "./imarsRover";


export class MarsRover implements IMarsRover {
    private direction: IDirection;
    private coordinate: ICoordinate;
    private grid: IGrid;
    // private MAX_HEIGHT: number = 10;
    // private MAX_WIDTH: number = 10;

    public constructor(grid: IGrid) {
        this.direction = new Direction();
        this.coordinate = new Coordinate(0, 0);
        this.grid = grid;
    }

    public execute(commands: string): string {
        commands.split("").forEach(chr => {
            if (chr === "R") {
                // this.direction = this.rotateRight();
                this.direction.right();
            }

            if (chr === "L") {
                // this.direction = this.rotateLeft();
                this.direction.left();
            }

            if (chr === "M") {
                // this.coordinate = this.move();
                this.coordinate = this.grid.nextCoordinateFor(this.coordinate, this.direction);
            }
        });
        // return "0:0:" + this.direction.value;
        return `${this.coordinate.x()}:${this.coordinate.y()}:${this.direction.value}`;
    }

    // private move(): ICoordinate {
    //     let y: number = this.coordinate.y();
    //     let x: number = this.coordinate.x();
    //     if (this.direction.value === "N") {
    //         y = (y += 1) % this.MAX_HEIGHT;
    //     }

    //     if (this.direction.value === "E") {
    //         x = (x += 1) % this.MAX_WIDTH;
    //     }

    //     if (this.direction.value === "S") {
    //         // x = (x === 0) ? 9 : x - 1;
    //         y = (y > 1) ? y - 1 : this.MAX_HEIGHT - 1;
    //     }

    //     if (this.direction.value === "W") {
    //         // x = (x === 0) ? 9 : x - 1;
    //         x = (x > 1) ? x - 1 : this.MAX_WIDTH - 1;
    //     }
    //     return new Coordinate(x, y);
    // }

    // private rotateRight(): string {
    //     if (this.direction === "N") {return "E"}
    //     if (this.direction === "E") {return "S"}
    //     if (this.direction === "S") {return "W"}

    //     return "N";

    // }

    // private rotateLeft(): string {
    //     if (this.direction === "N") {return "W"}
    //     if (this.direction === "W") {return "S"}
    //     if (this.direction === "S") {return "E"}
    //     return "N";
    // }


}
