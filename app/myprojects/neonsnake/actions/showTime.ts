export function showTime(timeInMs: number) {

    const minutes = Math.floor(timeInMs / 1000 / 60);
    const seconds = Math.floor(timeInMs / 1000)-minutes*60;

    const timer = ((minutes < 10) ? "0" + minutes : minutes) + ":" + ((seconds < 10) ? "0" + seconds : seconds)

    return timer;
}