export class Checker {
    constructor(row, input) {
        this.row = row;
        this.input = input;
    }

    checkRow1() {
        if(this.input < 1 || this.input > 9) {
            alert('Please input number between 1 to 9');
        }
        if(this.row.includes(this.input) == false) {
            this.row.push(this.input);
        } else {
            alert('This number is aleady used.');
        }
        return this.row;
    }
}