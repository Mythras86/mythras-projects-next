export function makeFood(snake: Array<number>, foods: Array<number>, poops: Array<number>): number {

    let random = 0;
    do {
        random = Math.floor( Math.random() * (399 - 0) + 0);
    }
    while (snake.includes(random) || foods.includes(random) || poops.includes(random));

    return random;
}