import GameTable from '../src/gameTable'
import Robot from '../src/robot'
import { Bearing, Direction } from '../src/helpers/enums'

describe('Robot tests', () => {
    let mockRobot: Robot
    beforeAll(() => {
        const mockTable = new GameTable(5)
        mockRobot = new Robot(mockTable)
    })

    afterEach(() => {
        mockRobot.resetPosition()
    })

    it('should set the initial position to [0, 0] SOUTH', () => {
        expect(mockRobot.x).toBe(0)
        expect(mockRobot.y).toBe(0)
        expect(mockRobot.bearing).toBe(Bearing.SOUTH)
    })

    describe('When using the PLACE X, Y, F command', () => {
        it('When a valid position is entered, the robot will be moved', () => {
            mockRobot.move(1, 2, Bearing.NORTH)

            expect(mockRobot.x).toBe(1)
            expect(mockRobot.y).toBe(2)
            expect(mockRobot.bearing).toBe(Bearing.NORTH)
        })

        it('When an invalid position is entered, the robot does not move', () => {
            console.log = jest.fn()
            mockRobot.move(4, 5, Bearing.WEST)

            expect(mockRobot.x).toBe(0)
            expect(mockRobot.y).toBe(0)
            expect(mockRobot.bearing).toBe(Bearing.SOUTH)
            expect(console.log).toHaveBeenCalledWith("Invalid position - out of bounds!")
        })
    })

    describe('When using the MOVE command', () => {
        it('When a valid position is entered, moves to the position', () => {
            mockRobot.move()
            expect(mockRobot.x).toBe(0)
            expect(mockRobot.y).toBe(1)
            expect(mockRobot.bearing).toBe(Bearing.SOUTH)
        })

        it('When a invalid position is entered, does not move', () => {
            console.log = jest.fn()
            mockRobot.rotate(Direction.RIGHT)
            mockRobot.move()

            expect(mockRobot.x).toBe(0)
            expect(mockRobot.y).toBe(0)
            expect(mockRobot.bearing).toBe(Bearing.WEST)
            expect(console.log).toHaveBeenCalledWith("Invalid position - out of bounds!")
        })

        it('When trying to move out of max bounds, does not move', () => {
            console.log = jest.fn()
            mockRobot.move(4, 4, Bearing.SOUTH)
            mockRobot.move()

            expect(mockRobot.x).toBe(4)
            expect(mockRobot.y).toBe(4)
            expect(mockRobot.bearing).toBe(Bearing.SOUTH)
            expect(console.log).toHaveBeenCalledWith("Invalid position - out of bounds!")
        })
    })

    describe('When using the LEFT/RIGHT commands', () => {
        it('Correctly rotates the robot to the left, starting at SOUTH', () => {
            mockRobot.rotate(Direction.LEFT)
            expect(mockRobot.bearing).toBe(Bearing.EAST)

            mockRobot.rotate(Direction.LEFT)
            expect(mockRobot.bearing).toBe(Bearing.NORTH)

            mockRobot.rotate(Direction.LEFT)
            expect(mockRobot.bearing).toBe(Bearing.WEST)

            mockRobot.rotate(Direction.LEFT)
            expect(mockRobot.bearing).toBe(Bearing.SOUTH)
        })

        it('Correctly rotates the robot to the right, starting at SOUTH', () => {
            mockRobot.rotate(Direction.RIGHT)
            expect(mockRobot.bearing).toBe(Bearing.WEST)

            mockRobot.rotate(Direction.RIGHT)
            expect(mockRobot.bearing).toBe(Bearing.NORTH)

            mockRobot.rotate(Direction.RIGHT)
            expect(mockRobot.bearing).toBe(Bearing.EAST)

            mockRobot.rotate(Direction.RIGHT)
            expect(mockRobot.bearing).toBe(Bearing.SOUTH)
        })
    })

    describe('When using the REPORT command', () => {
        it('prints out the correct position initially', () => {
            console.log = jest.fn()
            mockRobot.report()

            expect(console.log).toHaveBeenCalledWith("[0, 0], SOUTH\n")
        })

        it('prints out the correct position after moving the robot', () => {
            console.log = jest.fn()
            mockRobot.move(1, 3, Bearing.WEST)
            mockRobot.report()

            expect(console.log).toHaveBeenCalledWith("[1, 3], WEST\n")
        })
    })
})