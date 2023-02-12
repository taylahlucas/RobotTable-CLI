"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./helpers/enums");
const constants_1 = require("./helpers/constants");
const functions_1 = require("./helpers/functions");
class Robot {
    constructor(table) {
        this.table = table;
        this.x = 0;
        this.y = 0;
        this.bearing = enums_1.Bearing.SOUTH;
        this.resetPosition();
    }
    get directionToMove() {
        return constants_1.directionBindings[enums_1.Bearing[this.bearing]];
    }
    resetPosition() {
        this.x = 0;
        this.y = 0;
        this.bearing = enums_1.Bearing.SOUTH;
    }
    moveToPosition() {
        return {
            x: this.x + this.directionToMove[0],
            y: this.y + this.directionToMove[1]
        };
    }
    isValidPosition(x, y) {
        return x >= 0 && x < this.table.tableSize && y >= 0 && y < this.table.tableSize;
    }
    move() {
        let newPosition = this.moveToPosition();
        this.setMove(newPosition.x, newPosition.y, undefined);
    }
    place(x, y, bearing) {
        const validBearing = enums_1.Bearing[bearing.toUpperCase().replace(' ', '')];
        this.setMove(x, y, validBearing);
    }
    setMove(x, y, bearing) {
        if (this.isValidPosition(x, y)) {
            this.x = x;
            this.y = y;
            this.bearing = bearing !== null && bearing !== void 0 ? bearing : this.bearing;
        }
        else {
            console.log("Invalid position - out of bounds!");
        }
    }
    rotate(direction) {
        this.bearing = (0, functions_1.getNewBearingFromRotation)(direction, this.bearing);
    }
    report() {
        console.log(`[${this.x}, ${this.y}], ${enums_1.Bearing[this.bearing]}\n`);
    }
}
exports.default = Robot;
