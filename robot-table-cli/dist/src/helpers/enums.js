"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidCommands = exports.Direction = exports.Bearing = void 0;
var Bearing;
(function (Bearing) {
    Bearing[Bearing["NORTH"] = 0] = "NORTH";
    Bearing[Bearing["SOUTH"] = 1] = "SOUTH";
    Bearing[Bearing["EAST"] = 2] = "EAST";
    Bearing[Bearing["WEST"] = 3] = "WEST";
})(Bearing = exports.Bearing || (exports.Bearing = {}));
var Direction;
(function (Direction) {
    Direction[Direction["LEFT"] = 0] = "LEFT";
    Direction[Direction["RIGHT"] = 1] = "RIGHT";
})(Direction = exports.Direction || (exports.Direction = {}));
var ValidCommands;
(function (ValidCommands) {
    ValidCommands[ValidCommands["PLACE"] = 0] = "PLACE";
    ValidCommands[ValidCommands["MOVE"] = 1] = "MOVE";
    ValidCommands[ValidCommands["LEFT"] = 2] = "LEFT";
    ValidCommands[ValidCommands["RIGHT"] = 3] = "RIGHT";
    ValidCommands[ValidCommands["REPORT"] = 4] = "REPORT";
    ValidCommands[ValidCommands["DESCRIPTION"] = 5] = "DESCRIPTION";
    ValidCommands[ValidCommands["QUIT"] = 6] = "QUIT";
})(ValidCommands = exports.ValidCommands || (exports.ValidCommands = {}));
