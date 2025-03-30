    export function makeFood(snake: Array<number>, foods: Array<number>): Array<number> {
        const copySnake = snake.slice();
        const copyFoods = foods.slice();
        let random = 0;
        do {
            random = Math.floor( Math.random() * (399 - 0) + 0);
        }
        while (copySnake.includes(random) || copyFoods.includes(random));

        copyFoods.splice(0, 0, random);
        return copyFoods;
    }
