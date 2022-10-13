import { Bearing } from './enums'

export const directionBindings: { [id: string]: [number, number] } = {
    NORTH: [0, -1],
    SOUTH: [0, 1],
    EAST: [1, 0],
    WEST: [-1, 0]
}