import {DirectionType} from "./directionType";

export interface IDirection{
    turnRight(): void;
    turnLeft(): void;
    direction(): DirectionType;
}
