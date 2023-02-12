#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const menu_1 = require("./src/cli/menu");
const gameTable_1 = require("./src/gameTable");
if (require.main === module) {
    const game = new gameTable_1.default(5);
    function commandCallback(command, args) {
        game.processCommand(command, args);
    }
    const menu = new menu_1.default(game.tableSize, commandCallback);
    menu.init();
}
exports.default = gameTable_1.default;
