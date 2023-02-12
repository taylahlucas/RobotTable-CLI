"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewBearingFromRotation = exports.convertCommandToDirection = void 0;
const enums_1 = require("./enums");
function convertCommandToDirection(command) {
    switch (command) {
        case enums_1.ValidCommands.LEFT: return enums_1.Direction.LEFT;
        case enums_1.ValidCommands.RIGHT: return enums_1.Direction.RIGHT;
        default: return enums_1.Direction.RIGHT;
    }
}
exports.convertCommandToDirection = convertCommandToDirection;
function getNewBearingFromRotation(direction, currentBearing) {
    switch (currentBearing) {
        case enums_1.Bearing.NORTH:
            return direction === enums_1.Direction.RIGHT ? enums_1.Bearing.EAST : enums_1.Bearing.WEST;
        case enums_1.Bearing.SOUTH:
            return direction === enums_1.Direction.RIGHT ? enums_1.Bearing.WEST : enums_1.Bearing.EAST;
        case enums_1.Bearing.EAST:
            return direction === enums_1.Direction.RIGHT ? enums_1.Bearing.SOUTH : enums_1.Bearing.NORTH;
        case enums_1.Bearing.WEST:
            return direction == enums_1.Direction.RIGHT ? enums_1.Bearing.NORTH : enums_1.Bearing.SOUTH;
    }
}
exports.getNewBearingFromRotation = getNewBearingFromRotation;
