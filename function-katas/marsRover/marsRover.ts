import {Direction} from "./direction";
import {IDirection} from "./idirection";
import {IMarsRover} from "./imarsRover";


export class MarsRover implements IMarsRover {
    private direction: IDirection;

    public constructor() {
        this.direction = new Direction();
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
        });
        return "0:0:" + this.direction.value;
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
