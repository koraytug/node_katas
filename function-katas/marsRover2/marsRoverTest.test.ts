import {Coordinate} from "./coordinate";
import {Grid} from "./grid";
import {ICoordinate} from "./icoordinate";
import {IGrid} from "./igrid";
import {IRover} from "./irover";
import {Rover} from "./rover";

describe("Mars Rover TDD", () => {
    let inputData: string[];
    let rover: IRover;

    beforeEach(() => {
        const grid: IGrid = new Grid();
        inputData = ["55", "12N", "LMLMLMLMM", "33E", "MMRMMRMRRM"];
        rover = new Rover(grid);
    });

    it("parse plateau size", () => {
        const result: string = rover.getPlateauSize(inputData);
        expect(result).toBe("55");
    });

    it("parse plateau size if input is empty", () => {
        const result: string = rover.getPlateauSize([]);
        expect(result).toBe("");
    });

    it("get first rover staring position", () => {
        const result: string = rover.getRoversStartPosition(inputData, 1);
        expect(result).toBe("12N");
    });

    it("get second rover staring position", () => {
        const result: string = rover.getRoversStartPosition(inputData, 2);
        expect(result).toBe("33E");
    });

    it("get first rover moves", () => {
        const result: string = rover.getRoverMoves(inputData, 1);
        expect(result).toBe("LMLMLMLMM");
    });

    it("get first rover moves", () => {
        const result: string = rover.getRoverMoves(inputData, 2);
        expect(result).toBe("MMRMMRMRRM");
    });

    //it("Rover turn right", () => {
    it.each([
        "R,00E",
        "RR,00S",
        "RRR,00W",
        "RRRR,00N"])("Rover turn right", input => {
        // const result = rover.run("R");
        const params = input.split(",");
        const result = rover.run(params[0]);
        expect(result).toBe(params[1]);
    });


    it.each([
        "M,01N", "MMM,03N"
    ])("move the rover up", input => {
        // const result = rover.run("R");
        const params = input.split(",");
        const result = rover.run(params[0]);
        expect(result).toBe(params[1]);
    });

    it.each([
        "MMMMMMMMMM,00N",
        "MMMMMMMMMMMMMMM,05N"
    ])("wrap from top to bottom when moving north", param => {
        const params = param.split(",");
        const commands = params[0];
        const position = params[1];
        expect(rover.run(commands)).toBe(position);
    });


    it.each([
        "RM,10E",
        "RMMMMM,50E"
    ])("move right", param => {
        const params = param.split(",");
        const commands = params[0];
        const position = params[1];
        expect(rover.run(commands)).toBe(position);
    });

    it.each([
        "RMMMMMMMMMM,00E",
        "RMMMMMMMMMMMMMMM,50E"
    ])("wrap from rigth to left when moving east", param => {
        const params = param.split(",");
        const commands = params[0];
        const position = params[1];
        expect(rover.run(commands)).toBe(position);
    });

    it.each([
        "LM,90W",
        "LMMMMM,50W"
    ])("move left", param => {
        const params = param.split(",");
        const commands = params[0];
        const position = params[1];
        expect(rover.run(commands)).toBe(position);
    });

    it.each([
        "LLM,09S",
        "LLMMMMM,05S"
    ])("move south", param => {
        const params = param.split(",");
        const commands = params[0];
        const position = params[1];
        expect(rover.run(commands)).toBe(position);
    });

    it.each([
        "MMMM,03N",
        "RMMMMMM,10E"
    ])("stop at obstacle", param => {
        const otherRovers: ICoordinate[] = [];
        otherRovers.push(new Coordinate(0, 4));
        otherRovers.push(new Coordinate(2, 0));

        const grid: IGrid = new Grid(otherRovers);
        const rover = new Rover(grid);

        const params = param.split(",");
        const commands = params[0];
        const position = params[1];
        expect(rover.run(commands)).toBe(position);
    });
});
