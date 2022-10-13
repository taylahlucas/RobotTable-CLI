import { EventEmitter } from 'node:events'

import Robot from './robot';
import { ValidCommands } from './helpers/enums';
// TODO: const validEntries  ???

export default class GameTable extends EventEmitter {
    public tableSize: number;
    public robot: Robot;

    constructor(tableSize: number) {
        super();
        this.tableSize = tableSize
        this.robot = new Robot(this);
    }

    processCommand(command: ValidCommands) {
        switch (command) {
            case ValidCommands.PLACE:
                // TODO:
                // this.robot.move()
            case ValidCommands.MOVE: 
                this.robot.move()
            case ValidCommands.LEFT:
                // this.robot.move()
            case ValidCommands.RIGHT:
                // this.robot.move()
            case ValidCommands.REPORT:
                // TODO: Print position
            case ValidCommands.DESCRIPTION:
                // TODO: Print description
            case ValidCommands.QUIT: 
                // TODO: Quit game

            default:
                console.log("HERE---default")
        }
    }
}