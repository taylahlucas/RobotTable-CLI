import { EventEmitter } from 'events'
import console from './console'


export default class Menu extends EventEmitter {
    public title: string
    public description: string
    public options: string
    public subtext: string
    // public selectedOption

    constructor() {
        super()
        
        this.title = "Welcome to the Robot Table CLI!"
        this.description = "To play this game, enter one of the following commands to move the robot around the 5 x 5 size table.\nDon't let the robot fall off!:"
        this.options = "PLACE X, Y, F: \nMOVE: \nLEFT/RIGHT: \nREPORT: \n"
        this.subtext = "To display the description again, type DESCRIPTION."
    }

    init() {
        console.log(this.title)
        this.printDescription()
    }

    printDescription() {
        console.log(this.description)
        console.log(this.options)
        console.log(this.subtext)
    }  
}