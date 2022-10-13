import GameTable from './gameTable'
import { Bearing } from './helpers/enums'
import { directionBindings } from './helpers/constants'

export default class Robot {
    public x: number = 0
    public y: number = 0
    public direction: Bearing = Bearing.SOUTH

    private get directionToMove(): [number, number] {
        return directionBindings[Bearing[this.direction]]
    }

    constructor(public table: GameTable) {
        this.resetPosition()
    }
    
    resetPosition() {
        this.x = 0
        this.y = 0
        this.direction = Bearing.SOUTH
    }

    calculateNewPosition() {
        return {
            x: this.x + this.directionToMove[0],
            y: this.y + this.directionToMove[1]
        }
    }

    isValidPosition(x: number, y: number) {
        return x >= 0 && x < this.table.tableSize || y >= 0 && y < this.table.tableSize
    }

    move() {
        let newPosition = this.calculateNewPosition()
        let isValid = this.isValidPosition(newPosition.x, newPosition.y)

        if (isValid) {
            this.x = newPosition.x
            this.y = newPosition.y
        }
        else {
            // TODO: print INVALID POSITION
        }
    }
}