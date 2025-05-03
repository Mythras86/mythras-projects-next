export function removeFood(foods: Array<number>, snakeHead: number): Array<number> {
    const copyFoods = foods.slice();
    copyFoods.splice(copyFoods.indexOf(snakeHead), 1);
    return copyFoods;
}
