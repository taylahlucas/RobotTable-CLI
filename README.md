# RobotTable-CLI
Console application for a robot travelling on an n x n table. <br />
Built using Node.JS and TypeScript. <br />
To play this game <br />
Enter one of the following commands to move the robot around the 5 x 5 size table. <br />
Don't let the robot fall off! <br />

COMMANDS: <br />
    - PLACE X, Y, F: Place the robot in position on the table at X, Y. Facing NORTH, SOUTH, EAST or WEST, <br />
    - MOVE: Move the robot one unit forward in the current direction, <br />
    - LEFT/RIGHT: Rotate the robot 90 degrees either LEFT or RIGHT, <br />
    - REPORT: Show the current positino of the robot,  <br />

https://github.com/taylahlucas/RobotTable-CLI/assets/53559103/89e1df35-744e-474f-8001-2ba02bfecc2d

# Setup

cd robot-table-cli<br />
npm run build<br />
npm run start<br />

# Running Tests

cd robot-table-cli<br />
npm run test<br />

# Folder Navigation

- /index.ts - Entry point of application
- /src/gameTable.ts - Game board which emits events
- /src/robot.ts - Class representing robots, its current attributes and commmand logic
- /src/helpers/ - Helper classes such as enums and constants
- /src/cli/ - Console logic and menus

# Packages

- @typescript
- @ts-node
- @types/node

- @jest
- @ts-jest
- @types/jest
