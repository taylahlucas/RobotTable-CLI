# RobotTable-CLI
Console application for a robot travelling on an n x n table.

# Setup

npm install
ts-node index.ts

# Folder Navigation

- /index.ts - Entry point of application
- /src/gameTable.ts - Game board which emits events
- /src/robot.ts - Class representing robots, its current attributes and commmand logic
// TODO:
- /src/logic -- seperate logc into another file??
- /src/helpers/ - Helper classes such as enums and constants
- /src/cli/ - Console logic and menus

# Packages

- @typescript
- @ts-node

- @types/node


// TODO: Check if these are being used
- @commander
- @types/commander

- @inquirer
- @types/inquirer