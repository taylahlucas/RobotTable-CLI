import GameTable from './gameTable'
import { Bearing, Direction } from './helpers/enums'
import { directionBindings } from './helpers/constants'
import { getNewBearingFromRotation } from './helpers/functions'

export default class Robot {
    public x: number = 0
    public y: number = 0
    public bearing: Bearing = Bearing.SOUTH

    private get directionToMove(): [number, number] {
        return directionBindings[Bearing[this.bearing].toUpperCase()]
    }

    constructor(public table: GameTable) {
        this.resetPosition()
    }
    
    resetPosition() {
        this.x = 0
        this.y = 0
        this.bearing = Bearing.SOUTH
    }

    moveToPosition() {
        return {
            x: this.x + this.directionToMove[0],
            y: this.y + this.directionToMove[1]
        }
    }

    isValidPosition(x: number, y: number) {
        return x >= 0 && x < this.table.tableSize && y >= 0 && y < this.table.tableSize
    }

    move() {
        let newPosition = this.moveToPosition()
        this.setMove(newPosition.x, newPosition.y, undefined)
    }

    place(x: number, y: number, bearing: string) {
        const validBearing = Bearing[bearing.toUpperCase().replace(' ', '') as any]
        this.setMove(x, y, validBearing as unknown as Bearing)
    }

    setMove(x: number, y: number, bearing: Bearing | undefined) {
        if (this.isValidPosition(x, y)) {
            this.x = x
            this.y = y
            this.bearing = bearing ?? this.bearing
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