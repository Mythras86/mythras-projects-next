export function removePoop(poops: Array<number>, snakeHead: number): Array<number> {
    const copyPoops = poops.slice();
    copyPoops.splice(copyPoops.indexOf(snakeHead), 1);
    return copyPoops;
}