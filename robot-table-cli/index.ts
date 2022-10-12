#! /usr/bin/env node
import Menu from './cli/menu'
import GameTable from './gameTable'

if (require.main === module) {
    const game = new GameTable(5);

    // TODO: Create exit function
    const menu = new Menu()
    menu.init()
}

export default GameTable