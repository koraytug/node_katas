import {IMarsRover} from "./imarsRover";
import {MarsRover} from "./marsRover";

describe("", () => {
    let rover: IMarsRover;

    beforeEach(() => {
        rover = new MarsRover();
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
});
