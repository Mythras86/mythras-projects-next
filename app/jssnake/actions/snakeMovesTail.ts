    export const newSnakeTail = (snakeGrow: boolean, newHeadIndex: number, snake: Array<number>): Array<number | string> => {

        // get previous snake copy
        let copySnake = snake.slice();
        // remove tail by deleting the first number of the array, but only if snakegrow is false
        if (!snakeGrow) {
            copySnake.splice(0, 1);
        }
        // insert head after the last index
        copySnake.splice(copySnake.length, 0, newHeadIndex);
        return copySnake;
    }
