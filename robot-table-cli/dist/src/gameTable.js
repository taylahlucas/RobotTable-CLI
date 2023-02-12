"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_events_1 = require("node:events");
const robot_1 = require("./robot");
const enums_1 = require("./helpers/enums");
const functions_1 = require("./helpers/functions");
class GameTable extends node_events_1.EventEmitter {
    constructor(tableSize) {
        super();
        this.tableSize = tableSize;
        this.robot = new robot_1.default(this);
    }
    processCommand(command, args) {
        switch (command) {
            case enums_1.ValidCommands.PLACE:
                this.robot.place(parseInt(args[0]), parseInt(args[1]), args[2]);
                break;
            case enums_1.ValidCommands.MOVE:
                this.robot.move();
                break;
            case enums_1.ValidCommands.LEFT:
            case enums_1.ValidCommands.RIGHT:
                const direction = (0, functions_1.convertCommandToDirection)(command);
                this.robot.rotate(direction);
                break;
            case enums_1.ValidCommands.REPORT:
                this.robot.report();
                break;
            default:
                break;
        }
    }
}
exports.default = GameTable;
