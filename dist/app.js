"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const csvTableIzer_1 = __importDefault(require("./function-katas/csvTableIzer/csvTableIzer"));
const fizzBuzz_1 = __importDefault(require("./function-katas/fizzBuzz/fizzBuzz"));
function runCsvTableIzer(run) {
    if (!run) {
        return;
    }
    const csvTable = new csvTableIzer_1.default();
    const table = csvTable.csvTableIzerMain();
    console.log(table);
}
function runFizzBuzz(run) {
    if (!run) {
        return;
    }
    const fizzBuzz = new fizzBuzz_1.default();
    const list = fizzBuzz.fizzBuzzMain();
    console.log(list);
}
runCsvTableIzer(false);
runFizzBuzz(true);
//# sourceMappingURL=app.js.map