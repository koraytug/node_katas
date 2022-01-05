import {Coordinate} from "./coordinate";
import {Direction} from "./direction";
import {ICoordinate} from "./icoordinate";
import {IDirection} from "./idirection";
import {IMarsRover} from "./imarsRover";


export class MarsRover implements IMarsRover {
    private direction: IDirection;
    private coordinate: ICoordinate;

    public constructor() {
        this.direction = new Direction();
        this.coordinate = new Coordinate(0, 0);
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
                this.coordinate = this.move();
            }
        });
        // return "0:0:" + this.direction.value;
        return `${this.coordinate.x()}:${this.coordinate.y()}:${this.direction.value}`;
    }

    private move(): ICoordinate {
        let y: number = this.coordinate.y();
        if (this.direction.value === "N") {
            y += 1;
        }

        return new Coordinate(this.coordinate.x(), y);
    }

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
