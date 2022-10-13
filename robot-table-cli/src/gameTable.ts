import { EventEmitter } from 'node:events'

import Robot from './robot';

// TODO: const validEntries  ???

export default class GameTable extends EventEmitter {
    public tableSize: number;
    public robot: Robot;

    constructor(tableSize: number) {
        super();
        this.tableSize = tableSize
        this.robot = new Robot(this);
    }

}