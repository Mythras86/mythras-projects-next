interface ICell {
    index: number;
    snake: Array<number>;
    foods: Array<number>;
    poops: Array<number>;
}

export default function Cell({index, snake, foods, poops}: ICell) {

    
    function whatIsMyColor(index: number) {
        if (snake[snake.length-1] == index) {
            return 'reverseOrange';
        }
        if (snake.includes(index)) {
            return 'reverseRed';
        }
        if (foods.includes(index)) {
            return 'reverseBlue';
        }
        if (poops.includes(index)) {
            return 'reverseBrown';
        }
        return 'bg-darkgrey border-black';
    }
    
    return(
        <div className={`cells ${whatIsMyColor(index)}`}></div>
    );   
    
}