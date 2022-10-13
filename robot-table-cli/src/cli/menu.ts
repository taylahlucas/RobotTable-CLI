import { EventEmitter } from 'events'
import console from './console'
import inputController from './inputController'

export default class Menu extends EventEmitter {
    public title: string
    public description: string
    public options: string
    public subtext: string

    constructor() {
        super()
        
        this.title = "\n\nWelcome to the Robot Table CLI!\n"
        this.description = "To play this game\nEnter one of the following commands to move the robot around the 5 x 5 size table.\nDon't let the robot fall off!\n\n"
        // TODO: Add further descriptions
        this.options = "PLACE X, Y, F: \nMOVE: \nLEFT/RIGHT: \nREPORT: \n"
        this.subtext = "To display the description again, type DESCRIPTION.\nTo quit, type QUIT\n\n\n"
    }

    init() {
        console.log(this.title)
        this.printDescription()

        function onKeyPress(move: string) {
            // TODO: Validation
            if (move === 'MOVE') {

            }
        }
        inputController(onKeyPress)
    }

    printDescription() {
        console.log(this.description)
        console.log(this.options)
        console.log(this.subtext)
    }  
}