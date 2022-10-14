import { EventEmitter } from 'node:events'

import Robot from './robot'
import { ValidCommands, Direction } from './helpers/enums'
import { convertCommandToDirection } from './helpers/functions'

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
                console.log("MOVE")
                this.robot.move()
                break
            case ValidCommands.LEFT:
            case ValidCommands.RIGHT:
                console.log("ROTATE: ", command)
                const direction: Direction = convertCommandToDirection(command)
                this.robot.rotate(direction)
                break
            case ValidCommands.REPORT:
                // TODO: Print position
                break
            case ValidCommands.DESCRIPTION:
                // TODO: Print description
                break
            case ValidCommands.QUIT: 
                // TODO: Quit game
                break
        }
    }
}