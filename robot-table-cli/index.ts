#! /usr/bin/env node
import Menu from './src/cli/menu'
import GameTable from './src/gameTable'
import { ValidCommands } from './src/helpers/enums';

if (require.main === module) {
    const game = new GameTable(5);

    function commandCallback(command: ValidCommands) {
        game.processCommand(command)
    }

    // TODO: Create exit function
    const menu = new Menu(commandCallback)
    menu.init()
}

export default GameTable