import { EventEmitter } from 'node:events'

import Robot from './robot'
import { ValidCommands, Direction } from './helpers/enums'
import { convertCommandToDirection } from './helpers/functions'

export default class GameTable extends EventEmitter {
    public tableSize: number;
    public robot: Robot;
    
    constructor(tableSize: number) {
        super();
        this.tableSize = tableSize
        this.robot = new Robot(this);
    }

    processCommand(command: ValidCommands, args: string[]) {
        switch (command) {
            case ValidCommands.PLACE:
                this.robot.move(
                    parseInt(args[0]), 
                    parseInt(args[1]), 
                    parseInt(args[2]), 
                )
                break
            case ValidCommands.MOVE:
                this.robot.move()
                break
            case ValidCommands.LEFT:
            case ValidCommands.RIGHT:
                const direction: Direction = convertCommandToDirection(command)
                this.robot.rotate(direction)
                break
            case ValidCommands.REPORT:
                this.robot.report()
                break
            default:
                break
        }
    }
}