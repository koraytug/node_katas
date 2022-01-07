import {ICoordinate} from "./icoordinate";
import {IDirection} from "./idirection";

export interface IGrid{
    nextCoordinateFor(coordinate: ICoordinate, direction: IDirection);
}
