    export const growSnake = (foods: Array<number>, newHeadIndex: number): boolean => {

        const copyFoods = foods.slice();
        if(copyFoods.includes(newHeadIndex)) {
            return true;
        }
        return false;
    }
