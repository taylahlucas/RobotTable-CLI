import { Bearing, Direction, ValidCommands } from './enums'

export function convertCommandToDirection(command: ValidCommands) {
    switch (command) {
        case ValidCommands.LEFT: return Direction.LEFT
        case ValidCommands.RIGHT: return Direction.RIGHT
        default: return Direction.RIGHT
    }
}

export function getNewBearingFromRotation(direction: Direction, currentBearing: Bearing) {
    switch (currentBearing) {
        case Bearing.NORTH:
            return direction === Direction.RIGHT ? Bearing.EAST : Bearing.WEST
        case Bearing.SOUTH:
            return direction === Direction.RIGHT ? Bearing.WEST : Bearing.EAST
        case Bearing.EAST:
            return direction === Direction.RIGHT ? Bearing.SOUTH : Bearing.NORTH
        case Bearing.WEST:
            return direction == Direction.RIGHT ? Bearing.NORTH : Bearing.SOUTH
    }
}