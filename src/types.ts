export type ConnectionMetadata = {
  playerName: string;
  password: string;
};

export type Player = {
  id: string;
  name: string;
  colour: string;
  score: number;
};

type Word = {
  text: string;
  description: string;
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
  word: Word;
};
