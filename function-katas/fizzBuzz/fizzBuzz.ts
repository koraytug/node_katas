import {IFizzBuzz} from "./ifizzBuzz";

export default class FizzBuzz implements IFizzBuzz {

    public fizzBuzzMain():string {
        let result = "";
        for (let i = 1; i < 101; i++) {
            result += this.fizzBuzDecision(i) + "\n";
        }
        return result;
    }

    public fizzBuzDecision(num: number): string {
        let result = "";

        if (num % 3 === 0) {
            result = "Fizz";
        }
        if (num % 5 === 0) {
            result += "Buzz";
        }
        if ((num % 3 !== 0) && (num % 5 !== 0)) {
            result = num.toString();
        }


        return result;
    }

}

