import {ICsvTableIzer} from "./icsvTableIzer";

export default class csvTableIzer implements ICsvTableIzer {

    public csvTableIzerMain():string {
        try {
            let table: string = "";

            const csv: string = `Name;Street;City;Age
Peter Pan;Am Hang 5;12345 Einsam;42
Maria Schmitz;Kölner Straße 45;50123 Köln;43
Paul Meier;Münchener Weg 1;87654 München;65`;

            const rows: string[] = csv.split("\n");

            if (rows && rows.length > 0) {

                const maxColumnWidths: Map<number, number> = new Map<number, number>();
                const rowItemsMap: Map<number, string[]> = new Map<number, string[]>();

                for (let i = 0; i < rows.length; i++) {
                    const cels: string[] = rows[i].split(";");


                    cels.forEach((cel, index) => {
                        const len: number = maxColumnWidths.get(index) ? maxColumnWidths.get(index) as number : 0;
                        if (cel.length > len) {
                            maxColumnWidths.set(index, cel.length);
                        }
                    });
                    rowItemsMap.set(i, cels);

                }

                rowItemsMap.forEach((rowItem, index) => {
                    if (index === 0) {
                        const tableRow: string = this.getTableRow(rowItem, maxColumnWidths, " ", "|");
                        table += `${tableRow}\n`;

                        const headerSeparetorRow: string = this.createHeaderSeperatorRow(maxColumnWidths);
                        table += `${headerSeparetorRow}\n`;
                    } else {
                        const tableRow: string = this.getTableRow(rowItem, maxColumnWidths, " ", "|");
                        table += `${tableRow}\n`;
                    }

                });


            }


            return table;
        } catch (error) {
            return error;
        }

    }

    public getTableRow(rowItem: string[], maxColumnWidths: Map<number, number>, fillingChar: string, separetorChar: string): string {
        let result: string = "";
        rowItem.forEach((item, index) => {
            const maxColLength: number = maxColumnWidths.get(index);
            result += this.arrangeColumnTextSize(item, fillingChar, maxColLength) + separetorChar;

        });

        return result;
    }

    public arrangeColumnTextSize(columnValue: string, fiilingChar: string, length: number) {
        let result: string = columnValue;
        if (length > columnValue.length) {
            const difference: number = length - columnValue.length;

            for (let i = 0; i < difference; i++) {
                result += fiilingChar;
            }
        }
        return result;
    }

    public createHeaderSeperatorRow(maxColumnWidths: Map<number, number>): string {
        const rowArray: string[] = [];
        for (let i = 0; i < maxColumnWidths.size; i++) {
            rowArray.push("-");
        }

        return this.getTableRow(rowArray, maxColumnWidths, "-", "+");

    }

}

