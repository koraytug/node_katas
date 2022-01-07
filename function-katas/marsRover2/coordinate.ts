import {ICoordinate} from "./icoordinate";

export class Coordinate implements ICoordinate {

    constructor(private _x: number, private _y: number) {
    }

    public get x():number {
        return this._x;
    }

    public get y():number {
        return this._y;
    }
}
