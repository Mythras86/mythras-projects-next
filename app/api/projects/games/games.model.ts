import mongoose from "mongoose";

export interface GameModel extends mongoose.Document {
  gameName: string;
  gameScores: [{
      name: string;
      score: number;
      date: Date;
  }];
}

const GameSchema = new mongoose.Schema<GameModel>({
  gameName: {
    type: String,
    required: [true, "Hiányzó adat"],
  },
  gameScores: [{
      name: {
        type: String,
        required: [true, "Hiányzó adat"],
      },
      score: {
        type: Number,
        required: [true, "Hiányzó adat"],
      },
      date: {
        type: Date,
        required: [true, "Hiányzó adat"],
      },
      time: {
        type: Number,
        required: [true, "Hiányzó adat"],
      },
  }]
});

const Game = mongoose.models?.Game || mongoose.model<GameModel>("Game", GameSchema);
export default Game;