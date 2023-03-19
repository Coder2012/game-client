export type ConnectionMetadata = {
  playerName: string;
  password: string;
};

export type Player = {
  id: string;
  name: string;
  colour: string;
  score: number;
  lastAnswer: string;
};

type Options = {
  A: string;
  B: string;
  C: string;
  D: string;
};

type Question = {
  category: string;
  description: string;
  options: Options;
};

export type Guess = {
  playerId: string;
  playerName: string;
  colour: string;
  word: string;
};

export type Winner = {
  player: Player;
  word: string;
};

export type RoomState = {
  isGameRunning: boolean;
  isGameOver: boolean;
  winner: Winner;
  password: string;
  hostId: string;
  players: Player[];
  guesses: Guess[];
  question: Question;
  answer: string;
};
