export enum Bearing {
    NORTH,
    SOUTH,
    EAST,
    WEST
}

export enum Direction {
    LEFT,
    RIGHT
}

export enum ValidCommands {
    // TODO: Add regex?
    PLACE,
    MOVE,
    LEFT = Direction.LEFT,
    RIGHT = Direction.RIGHT,
    REPORT,
    DESCRIPTION
}
