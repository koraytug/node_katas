import {Coordinate} from "./coordinate";
import {ICoordinate} from "./icoordinate";
import {IDirection} from "./idirection";
import {IGrid} from "./igrid";

export class Grid implements IGrid {
    private MAX_HEIGHT: number = 10;
    private MAX_WIDTH: number = 10;
    private obstacles: ICoordinate[] = [];

    constructor(obstacleList?: ICoordinate[]) {
        if (obstacleList && obstacleList.length > 0) {
            this.obstacles = obstacleList;
        }
    }

    public nextCoordinateFor(coordinate: ICoordinate, direction: IDirection): ICoordinate {
        let y: number = coordinate.y();
        let x: number = coordinate.x();
        if (direction.value === "N") {
            y = (y += 1) % this.MAX_HEIGHT;
        }

        if (direction.value === "E") {
            x = (x += 1) % this.MAX_WIDTH;
        }

        if (direction.value === "S") {
            y = (y > 1) ? y - 1 : this.MAX_HEIGHT - 1;
        }

        if (direction.value === "W") {
            x = (x > 1) ? x - 1 : this.MAX_WIDTH - 1;
        }

        const newCoordinate = new Coordinate(x, y);


        // return this.obstacles.includes(newCoordinate) ? coordinate : newCoordinate;
        return this.obstacles.some(obs => (obs.x() === newCoordinate.x() && obs.y() === newCoordinate.y())) ? coordinate : newCoordinate;
    }

}
