import csvTableIzer from "./function-katas/csvTableIzer/csvTableIzer";
import FizzBuzz from "./function-katas/fizzBuzz/fizzBuzz";


function runCsvTableIzer(run: boolean): void {
    if (!run) {return}
    const csvTable: csvTableIzer = new csvTableIzer();
    const table: string = csvTable.csvTableIzerMain();
    console.log(table);
}
function runFizzBuzz(run: boolean): void {
    if (!run) {return}
    const fizzBuzz: FizzBuzz = new FizzBuzz();
    const list: string = fizzBuzz.fizzBuzzMain();
    console.log(list);
}

runCsvTableIzer(false);

runFizzBuzz(true);
