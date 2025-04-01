    export function removeFood(foods: Array<number>, snakeHead: number): Array<number> {
        const copyFoods = foods.slice();
        copyFoods.filter(x=>x != snakeHead)
        return copyFoods;
    }
