import GameTable from './gameTable'
import { Bearing, Direction } from './helpers/enums'
import { directionBindings } from './helpers/constants'
import { getNewBearingFromRotation } from './helpers/functions'

export default class Robot {
    public x: number = 0
    public y: number = 0
    public bearing: Bearing = Bearing.SOUTH

    private get directionToMove(): [number, number] {
        return directionBindings[Bearing[this.bearing]]
    }

    constructor(public table: GameTable) {
        this.resetPosition()
    }
    
    resetPosition() {
        this.x = 0
        this.y = 0
        this.bearing = Bearing.SOUTH
    }

    calculateNewPosition(x: number, y: number) {
        return {
            x: this.x + x,
            y: this.y + y
        }
    }

    isValidPosition(x: number, y: number) {
        return x >= 0 && x < this.table.tableSize && y >= 0 && y < this.table.tableSize
    }

    move(x?: number, y?: number, bearing?: Bearing) {
        let newPosition = this.calculateNewPosition(
            x ?? this.directionToMove[0], 
            y ?? this.directionToMove[1]
        )
        let isValid = this.isValidPosition(newPosition.x, newPosition.y)

        if (isValid) {
            this.x = newPosition.x
            this.y = newPosition.y
        }
        else {
            console.log("Invalid position - out of bounds!")
        }
    }

    rotate(direction: Direction) {
        this.bearing = getNewBearingFromRotation(direction, this.bearing)
    }

    report() {
        console.log(`[${this.x}, ${this.y}], ${Bearing[this.bearing]}\n`)
    }
}