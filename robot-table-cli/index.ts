#! /usr/bin/env node
import Menu from './src/cli/menu'
import GameTable from './src/gameTable'

if (require.main === module) {
    const game = new GameTable(5);

    // TODO: Create exit function
    const menu = new Menu()
    menu.init()
}

export default GameTable