import { ScoresDto } from "./games.dto";

export function sortScores(scoresArr: Array<ScoresDto>) {
  scoresArr.sort((a, b) => {
      // sort score
      if (a.score < b.score) return 1;
      if (a.score > b.score) return -1;
      // sort time
      if (a.time < b.time) return -1;
      if (a.time > b.time) return 1;
      // sort time
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      // Both idential, return 0
      return 0;
    });
}
