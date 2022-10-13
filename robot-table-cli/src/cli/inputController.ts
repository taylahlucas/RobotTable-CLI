import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function inputController(callback: Function) {
    rl.question("Enter your move: ", function(move: string) {
        callback(move)
    })
}
export default inputController

