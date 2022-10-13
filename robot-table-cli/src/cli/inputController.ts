import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const getInput = (callback: Function) => {
    rl.question("Enter your move: ", function(move: string) {
        return callback(move)
    })
}

export default getInput

