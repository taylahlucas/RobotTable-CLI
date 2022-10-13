import { Bearing } from './enums'
import GameTable from './gameTable'

export default class Robot {
    public x: number = 0
    public y: number = 0
    public direction: Bearing = Bearing.S

    constructor(public table: GameTable) {
        this.resetPosition()
    }

    resetPosition() {
        this.x = 0
        this.y = 0
        this.direction = Bearing.S
    }

    isInvalidPosition(x: number, y: number) {
        // TODO: Make this also based of game board size
        return x < 0 || y < 0
    }

    move() {
        
    }
}