    export function makePoop(snake: Array<number>, poops: Array<number>): Array<number> {
        const copyPoops = poops.slice();
        copyPoops.splice(0, 0, snake[0])

        return copyPoops;
    }
