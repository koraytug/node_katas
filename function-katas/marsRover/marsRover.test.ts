import {Coordinate} from "./coordinate";
import {Grid} from "./grid";
import {ICoordinate} from "./icoordinate";
import {IGrid} from "./igrid";
import {IMarsRover} from "./imarsRover";
import {MarsRover} from "./marsRover";

describe("", () => {
    let rover: IMarsRover;

    beforeEach(() => {
        const grid: IGrid = new Grid();
        rover = new MarsRover(grid);
    });

    it.each([
        "R,0:0:E",
        "RR,0:0:S",
        "RRR,0:0:W",
        "RRRR,0:0:N"
    ])("rotate right", param => {
        const params = param.split(",");
        const commands = params[0];
        const position = params[1];
        expect(rover.execute(commands)).toBe(position);
    });

    it.each([
        "L,0:0:W",
        "LL,0:0:S",
        "LLL,0:0:E",
        "LLLL,0:0:N"
    ])("rotate left", param => {
        const params = param.split(",");
        const commands = params[0];
        const position = params[1];
        expect(rover.execute(commands)).toBe(position);
    });

    it.each([
        "M,0:1:N",
        "MMM,0:3:N"
    ])("move up", param => {
        const params = param.split(",");
        const commands = params[0];
        const position = params[1];
        expect(rover.execute(commands)).toBe(position);
    });

    it.each([
        "MMMMMMMMMM,0:0:N",
        "MMMMMMMMMMMMMMM,0:5:N"
    ])("wrap from top to bottom when moving north", param => {
        const params = param.split(",");
        const commands = params[0];
        const position = params[1];
        expect(rover.execute(commands)).toBe(position);
    });


    it.each([
        "RM,1:0:E",
        "RMMMMM,5:0:E"
    ])("move right", param => {
        const params = param.split(",");
        const commands = params[0];
        const position = params[1];
        expect(rover.execute(commands)).toBe(position);
    });

    it.each([
        "RMMMMMMMMMM,0:0:E",
        "RMMMMMMMMMMMMMMM,5:0:E"
    ])("wrap from rigth to left when moving east", param => {
        const params = param.split(",");
        const commands = params[0];
        const position = params[1];
        expect(rover.execute(commands)).toBe(position);
    });

    it.each([
        "LM,9:0:W",
        "LMMMMM,5:0:W"
    ])("move left", param => {
        const params = param.split(",");
        const commands = params[0];
        const position = params[1];
        expect(rover.execute(commands)).toBe(position);
    });

    it.each([
        "LLM,0:9:S",
        "LLMMMMM,0:5:S"
    ])("move south", param => {
        const params = param.split(",");
        const commands = params[0];
        const position = params[1];
        expect(rover.execute(commands)).toBe(position);
    });

    it.each([
        "MMMM,0:3:N",
        "RMMMMMM,1:0:E"
    ])("stop at obstacle", param => {
        const obstacle: ICoordinate[] = [];
        obstacle.push(new Coordinate(0, 4));
        obstacle.push(new Coordinate(2, 0));

        const grid: IGrid = new Grid(obstacle);
        const rover = new MarsRover(grid);

        const params = param.split(",");
        const commands = params[0];
        const position = params[1];
        expect(rover.execute(commands)).toBe(position);
    });
});
