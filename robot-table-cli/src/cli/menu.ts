import { EventEmitter } from 'events'
import { ValidCommands } from '../enums'
import console from './console'
import getInput from './inputController'

export default class Menu extends EventEmitter {
    public title: string
    public description: string
    public instructions: Array<string>
    public subtext: string

    constructor() {
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
    }

    init() {
        console.log(this.title)
        this.printDescription()

        function onCommandEntry(command: string) {
            // TODO: Validation
            let isValid = false
            Object.values(ValidCommands).map((value) => {
                if (command.includes(value)) {
                    isValid = true
                }
            })

            console.log("HERE: ", isValid.toString())

            if (command === 'MOVE') {

            }
        }
        // TODO: While game is still running,  onkeypress for return to reset input ?
        getInput(onCommandEntry)
    }

    printDescription() {
        console.log(this.description)

        this.instructions.forEach(element => {
            console.log(`\t${element}\n\n`)
        });
        console.log(this.subtext)
    }  
    
    // checkValidCommand(command: String) {
    //     // return Object.values(ValidCommands).includes([command])

    //     Object.values(ValidCommands).map((value) => {
    //         if (command.includes(value)) {
    //             return true
    //         }
    //     })
    //     return false
    // }
}