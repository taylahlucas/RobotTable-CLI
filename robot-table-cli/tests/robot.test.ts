import GameTable from '../src/gameTable'
import Robot from '../src/robot'

jest.mock('../src/gameTable')

describe('Robot tests', () => {
    it('should mock the game table', () => {
        const staticFunc = jest.fn()
        const mockGameTable = GameTable as jest.Mocked<typeof GameTable>
        
        console.log("\n HERE RUNNING \n: ", mockGameTable)
        // mockGameTable.staticFunc.mockImplementation()
    })
})