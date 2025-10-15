interface Props {
    index: number;
    snake: Array<number>;
    foods: Array<number>;
    poops: Array<number>;
}

export default function Cell({index, snake, foods, poops}: Props) {
    
    function whatIsMyColor(index: number) {
        if (snake[snake.length-1] == index) {
            return 'sneakHead';
        }
        if (snake.includes(index)) {
            return 'sneakBody';
        }
        if (foods.includes(index)) {
            return 'sneakfood';
        }
        if (poops.includes(index)) {
            return 'sneakPoop';
        }
        return 'emptyCell';
    }
    
    return(
        <div className={`cells ${whatIsMyColor(index)}`}></div>
    );   
    
}