#! /usr/bin/env node
import Menu from './src/cli/menu'
import GameTable from './src/gameTable'
import { ValidCommands } from './src/helpers/enums';

if (require.main === module) {
    const game = new GameTable(5);

    function commandCallback(command: ValidCommands, args: string[]) {
        game.processCommand(command, args)
    }

    // TODO: Create exit function
    const menu = new Menu(
        game.tableSize, 
        commandCallback,
        
    )
    menu.init()

    // function menuCallback(command: ValidCommands) {
    //     menu.processCommand()
    // }
}

export default GameTable