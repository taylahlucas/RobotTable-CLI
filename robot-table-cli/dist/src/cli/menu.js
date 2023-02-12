"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const enums_1 = require("../helpers/enums");
const inputController_1 = require("./inputController");
class Menu extends events_1.EventEmitter {
    constructor(tableSize, callback) {
        super();
        this.title = "\n\n\t*** Welcome to the Robot Table CLI! ***\n\n";
        this.description = "To play this game\nEnter one of the following commands to move the robot around the 5 x 5 size table.\nDon't let the robot fall off!\n\n";
        this.instructions = [
            "PLACE X, Y, F: Place the robot in position on the table at X, Y. Facing NORTH, SOUTH, EAST or WEST.",
            "MOVE: Move the robot one unit forward in the current direction.",
            "LEFT/RIGHT: Rotate the robot 90 degrees either LEFT or RIGHT.",
            "REPORT: Show the current positino of the robot.",
        ];
        this.subtext = "To display the description again, type DESCRIPTION.\nTo quit, type QUIT\n\n\n";
        this.tableSize = tableSize;
        this.callback = callback;
    }
    init() {
        console.log(this.title);
        this.printDescription();
        // Handle user input
        const onCommandEntry = (command) => {
            let { validCommand, args } = getValidCommand(command);
            if (validCommand != undefined) {
                switch (enums_1.ValidCommands[validCommand]) {
                    case enums_1.ValidCommands.DESCRIPTION:
                        this.printDescription();
                        break;
                    case enums_1.ValidCommands.QUIT:
                        process.exit();
                        break;
                    default:
                        this.callback(enums_1.ValidCommands[validCommand], args);
                }
            }
            else {
                console.log("Invalid command. Please enter a command from the following list.\n");
            }
        };
        const getValidCommand = (command) => {
            const commandString = command.toLowerCase();
            if (commandString.includes(enums_1.ValidCommands[enums_1.ValidCommands.PLACE].toLowerCase())) {
                const placeString = enums_1.ValidCommands[enums_1.ValidCommands.PLACE].toLowerCase();
                // Validating arguments - convert to lowercase to handle upper and lowercase input
                const reg = new RegExp(`${placeString} [0-${this.tableSize}], [0-${this.tableSize}], north|south|east|west`);
                if (reg.test(commandString)) {
                    return {
                        validCommand: Object.keys(enums_1.ValidCommands).find(key => key == enums_1.ValidCommands[enums_1.ValidCommands.PLACE]),
                        args: commandString.replace(placeString, '').split(',')
                    };
                }
                else {
                    return {
                        validCommand: undefined,
                        args: []
                    };
                }
            }
            return {
                validCommand: Object.keys(enums_1.ValidCommands).find(key => command.toString().toLowerCase().includes(key.toLowerCase())),
                args: []
            };
        };
        inputController_1.default.on('line', onCommandEntry);
    }
    printDescription() {
        console.log('\n\n');
        console.log(this.description);
        this.instructions.forEach(element => {
            console.log(`\t${element}\n\n`);
        });
        console.log(this.subtext);
    }
}
exports.default = Menu;
