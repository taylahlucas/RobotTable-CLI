import { Bearing, Direction, ValidCommands } from '../src/helpers/enums'
import { convertCommandToDirection, getNewBearingFromRotation } from '../src/helpers/functions'

describe('convertCommandToDirection tests', () => {
    it('correctly converts left command to direction', () => {
        const command = convertCommandToDirection(ValidCommands.LEFT)
        expect(command).toBe(Direction.LEFT)
    })

    it('correctly converts right command to direction', () => {
        const command = convertCommandToDirection(ValidCommands.RIGHT)
        expect(command).toBe(Direction.RIGHT)
    })
})

describe('getNewBearingFromRotation tests', () => {
    describe('when the direction is LEFT', () => {
        it('returns the correct bearing from NORTH', () => {
            const bearing = getNewBearingFromRotation(Direction.LEFT, Bearing.NORTH)
            expect(bearing).toBe(Bearing.WEST)
        })

        it('returns the correct bearing from SOUTH', () => {
            const bearing = getNewBearingFromRotation(Direction.LEFT, Bearing.SOUTH)
            expect(bearing).toBe(Bearing.EAST)
        })

        it('returns the correct bearing from EAST', () => {
            const bearing = getNewBearingFromRotation(Direction.LEFT, Bearing.EAST)
            expect(bearing).toBe(Bearing.NORTH)
        })

        it('returns the correct bearing from WEST', () => {
            const bearing = getNewBearingFromRotation(Direction.LEFT, Bearing.WEST)
            expect(bearing).toBe(Bearing.SOUTH)
        })
    })

    describe('when the direction is RIGHT', () => {
        it('returns the correct bearing from NORTH', () => {
            const bearing = getNewBearingFromRotation(Direction.RIGHT, Bearing.NORTH)
            expect(bearing).toBe(Bearing.EAST)
        })

        it('returns the correct bearing from SOUTH', () => {
            const bearing = getNewBearingFromRotation(Direction.RIGHT, Bearing.SOUTH)
            expect(bearing).toBe(Bearing.WEST)
        })

        it('returns the correct bearing from EAST', () => {
            const bearing = getNewBearingFromRotation(Direction.RIGHT, Bearing.EAST)
            expect(bearing).toBe(Bearing.SOUTH)
        })

        it('returns the correct bearing from WEST', () => {
            const bearing = getNewBearingFromRotation(Direction.RIGHT, Bearing.WEST)
            expect(bearing).toBe(Bearing.NORTH)
        })
    })
})