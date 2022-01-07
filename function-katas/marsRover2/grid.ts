import {Coordinate} from "./coordinate";
import {DirectionType} from "./directionType";
import {ICoordinate} from "./icoordinate";
import {IDirection} from "./idirection";
import {IGrid} from "./igrid";

export class Grid implements IGrid {
    private MAX_HEIGHT: number = 10;
    private MAX_WIDTH: number = 10;
    private otherRovers: ICoordinate[] = [];

    constructor(roverList?: ICoordinate[]) {
        if (roverList && roverList.length > 0) {
            this.otherRovers = roverList;
        }
    }

    public nextCoordinateFor(coordinate: ICoordinate, direction: IDirection) {
        let y: number = coordinate.y;
        let x: number = coordinate.x;
        if (direction.direction() === DirectionType.North) {
            // y += 1;
            y = (y + 1) % this.MAX_HEIGHT;
        }

        if (direction.direction() === DirectionType.East) {
            // x += 1;
            x = (x += 1) % this.MAX_WIDTH;
        }

        if (direction.direction() === DirectionType.West) {
            // x = 9;
            // x = (x === 0) ? 9 : x - 1;
            x = (x > 1) ? x - 1 : this.MAX_WIDTH - 1;
        }

        if (direction.direction() === DirectionType.South) {
            // x = (x === 0) ? 9 : x - 1;
            y = (y > 1) ? y - 1 : this.MAX_HEIGHT - 1;
        }

        const newCoordinate = new Coordinate(x, y);


        // return newCoordinate;
        // return this.obstacles.includes(newCoordinate) ? coordinate : newCoordinate;
        return this.otherRovers.some(obs => (obs.x === x && obs.y === y)) ? coordinate : newCoordinate;
    }

}
