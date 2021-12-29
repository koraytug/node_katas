"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class csvTableIzer {
    csvTableIzerMain() {
        try {
            let table = "";
            const csv = `Name;Street;City;Age
Peter Pan;Am Hang 5;12345 Einsam;42
Maria Schmitz;Kölner Straße 45;50123 Köln;43
Paul Meier;Münchener Weg 1;87654 München;65`;
            const rows = csv.split("\n");
            if (rows && rows.length > 0) {
                // const header: string[] = rows[0].split(";");
                // const columnCount: number = header.length;
                const maxColumnWidths = new Map();
                const rowItemsMap = new Map();
                for (let i = 0; i < rows.length; i++) {
                    const cels = rows[i].split(";");
                    cels.forEach((cel, index) => {
                        const len = maxColumnWidths.get(index) ? maxColumnWidths.get(index) : 0;
                        if (cel.length > len) {
                            maxColumnWidths.set(index, cel.length);
                        }
                    });
                    rowItemsMap.set(i, cels);
                }
                rowItemsMap.forEach((rowItem, index) => {
                    if (index === 0) {
                        const tableRow = this.getTableRow(rowItem, maxColumnWidths, " ", "|");
                        table += `${tableRow}\n`;
                        const headerSeparetorRow = this.createHeaderSeperatorRow(maxColumnWidths);
                        table += `${headerSeparetorRow}\n`;
                    }
                    else {
                        const tableRow = this.getTableRow(rowItem, maxColumnWidths, " ", "|");
                        table += `${tableRow}\n`;
                    }
                });
            }
            return table;
        }
        catch (error) {
            return error;
        }
    }
    getTableRow(rowItem, maxColumnWidths, fillingChar, separetorChar) {
        let result = "";
        rowItem.forEach((item, index) => {
            const maxColLength = maxColumnWidths.get(index);
            result += this.arrangeColumnTextSize(item, fillingChar, maxColLength) + separetorChar;
        });
        return result;
    }
    arrangeColumnTextSize(columnValue, fiilingChar, length) {
        let result = columnValue;
        if (length > columnValue.length) {
            const difference = length - columnValue.length;
            for (let i = 0; i < difference; i++) {
                result += fiilingChar;
            }
        }
        return result;
    }
    createHeaderSeperatorRow(maxColumnWidths) {
        const rowArray = [];
        for (let i = 0; i < maxColumnWidths.size; i++) {
            rowArray.push("-");
        }
        return this.getTableRow(rowArray, maxColumnWidths, "-", "+");
    }
}
exports.default = csvTableIzer;
//# sourceMappingURL=csvTableIzer.js.map