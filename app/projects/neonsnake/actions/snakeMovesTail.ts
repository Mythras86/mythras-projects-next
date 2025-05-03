    export const newSnakeTail = (sneakEatsSth: number, newHeadIndex: number, snake: Array<number>): Array<number> => {

        // get previous snake copy
        let copySnake = snake.slice();
        // remove tail by deleting the first number of the array, but only if snakegrow is false
        if (sneakEatsSth != 100) {
            copySnake.splice(0, 1);
        }
        // insert head after the last index
        copySnake.splice(copySnake.length, 0, newHeadIndex);
        return copySnake;
    }
