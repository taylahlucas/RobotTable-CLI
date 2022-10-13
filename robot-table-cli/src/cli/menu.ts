import { EventEmitter } from 'events'
import { ValidCommands } from '../helpers/enums'
import console from './console'
import inputController from './inputController'

export default class Menu extends EventEmitter {
    private title: string
    private description: string
    private instructions: Array<string>
    private subtext: string
    private callback: (command: ValidCommands) => void


    constructor(callback: (command: ValidCommands) => void) {
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
        this.callback = callback
    }

    init() {
        console.log(this.title)
        this.printDescription()

        // Handle user input
        const onCommandEntry = (command: string) => {
            let validCommand = getValidCommand(command)
            if (validCommand) {
                this.callback(ValidCommands[validCommand as keyof typeof ValidCommands])
            }
            else {
                console.log("Invalid command. Please enter a command from the following list.\n")
            }
        }

        const getValidCommand = (command: string) => {
            return Object.keys(ValidCommands).find(key => key.toString().toLowerCase() === command.toLowerCase())
        }

        inputController.on('line', onCommandEntry)
    }

    printDescription() {
        console.log(this.description)

        this.instructions.forEach(element => {
            console.log(`\t${element}\n\n`)
        });
        console.log(this.subtext)
    }
}