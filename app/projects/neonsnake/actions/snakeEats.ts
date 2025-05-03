export const snakeEats = (foods: Array<number>, poops: Array<number>,newHeadIndex: number): number => {

    const copyFoods = foods.slice();
    const copyPoops = poops.slice();

    if(copyFoods.includes(newHeadIndex)) {
        return 100;
    }
    if(copyPoops.includes(newHeadIndex)) {
        return -50;
    }
    return 0;
}