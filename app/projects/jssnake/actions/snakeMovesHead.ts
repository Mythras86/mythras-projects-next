    export const moveSnakeHead = (direction: number, snake: Array<number>): number => {

        const copySnake = snake.slice();
        const head = snake[snake.length-1];

        // generate the new index of head for tests
        let newHeadIndex: number = head+direction;

        // here is 4 cases regarding movement
        if (direction == -1) {
            if (newHeadIndex+1 == 0 || Number.isInteger((newHeadIndex+1)/20)) {
                newHeadIndex = newHeadIndex+20;
            };
        } else if (direction == 1) {
            if (newHeadIndex == 400 || Number.isInteger(newHeadIndex/20)) {
                newHeadIndex = newHeadIndex-20;
            };
        } else if (direction == -20) {
            if (newHeadIndex < 0) {
                newHeadIndex = 400+newHeadIndex;
            };
        } else if (direction == 20) {
            if (newHeadIndex > 399) {
                newHeadIndex = newHeadIndex-400;
            };
        }

        // check if snake collide with itself
        if (copySnake.find(e => e == newHeadIndex)) {
            newHeadIndex = -1;
        }

        return newHeadIndex;
    }
