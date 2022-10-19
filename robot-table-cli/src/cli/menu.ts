import { EventEmitter } from 'events'
import { Bearing, ValidCommands } from '../helpers/enums'
import inputController from './inputController'

export default class Menu extends EventEmitter {
    private title: string
    private description: string
    private instructions: Array<string>
    private subtext: string
    private tableSize: number
    private callback: (command: ValidCommands, args: string[]) => void


    constructor(tableSize: number, callback: (command: ValidCommands, args: string[]) => void) {
        super()
        
        this.title = "\n\n\t*** Welcome to the Robot Table CLI! ***\n\n"
        this.description = "To play this game\nEnter one of the following commands to move the robot around the 5 x 5 size table.\nDon't let the robot fall off!\n\n"
        this.instructions = [
            "PLACE X, Y, F: Place the robot in position on the table at X, Y. Facing NORTH, SOUTH, EAST or WEST.",
            "MOVE: Move the robot one unit forward in the current direction.",
            "LEFT/RIGHT: Rotate the robot 90 degrees either LEFT or RIGHT.",
            "REPORT: Show the current positino of the robot.",
        ]
        this.subtext = "To display the description again, type DESCRIPTION.\nTo quit, type QUIT\n\n\n"
        this.tableSize = tableSize
        this.callback = callback
    }

    init() {
        console.log(this.title)
        this.printDescription()

        // Handle user input
        const onCommandEntry = (command: string) => {
            let { validCommand, args } = getValidCommand(command)
            if (validCommand != undefined) {
                switch (ValidCommands[validCommand as keyof typeof ValidCommands]) {
                    case ValidCommands.DESCRIPTION:
                        this.printDescription()
                        break
                    case ValidCommands.QUIT:
                        process.exit() 
                        break
                    default:
                        this.callback(ValidCommands[validCommand as keyof typeof ValidCommands], args)
                }
            }
            else {
                console.log("Invalid command. Please enter a command from the following list.\n")
            }
        }

        const getValidCommand = (command: string) => {
            const commandString: string = command.toLowerCase()
            if (commandString.includes(ValidCommands[ValidCommands.PLACE].toLowerCase())) {
                const placeString = ValidCommands[ValidCommands.PLACE].toLowerCase()
                // Validating arguments - convert to lowercase to handle upper and lowercase input
                const reg = new RegExp(`${placeString} [0-${this.tableSize}], [0-${this.tableSize}], north|south|east|west`)
                if (reg.test(commandString)) {
                    return { 
                        validCommand: Object.keys(ValidCommands).find(key => key == ValidCommands[ValidCommands.PLACE]),
                        args: commandString.replace(placeString, '').split(',')
                     }
                }
                else {
                    return {
                        validCommand: undefined,
                        args: []
                    }
                }
            }
            return { 
                validCommand: Object.keys(ValidCommands).find(key => command.toString().toLowerCase().includes(key.toLowerCase())),
                args: []
             }
        }

        inputController.on('line', onCommandEntry)
    }

    printDescription() {
        console.log('\n\n')
        console.log(this.description)

        this.instructions.forEach(element => {
            console.log(`\t${element}\n\n`)
        });
        console.log(this.subtext)
    }
}