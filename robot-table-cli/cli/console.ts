export default {
    log(...args: string[]) {
        process.stdout.write(args.join('\n'))
    },
    reset() {
        console.clear()
    }
}