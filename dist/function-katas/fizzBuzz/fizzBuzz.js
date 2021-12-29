"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FizzBuzz {
    fizzBuzzMain() {
        let result = "";
        for (let i = 1; i < 101; i++) {
            result += this.fizzBuzDecision(i) + "\n";
        }
        return result;
    }
    fizzBuzDecision(num) {
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
exports.default = FizzBuzz;
//# sourceMappingURL=fizzBuzz.js.map