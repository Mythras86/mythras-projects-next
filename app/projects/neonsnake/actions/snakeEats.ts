export const snakeEats = (foods: Array<number>, poops: Array<number>,newHeadIndex: number): number => {

    if(foods.includes(newHeadIndex)) {
        return 100;
    }
    if(poops.includes(newHeadIndex)) {
        return -50;
    }
    return 0;
}