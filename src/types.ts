export type ConnectionMetadata = {
  playerName: string;
  password: string;
};

export type Player = {
  id: string;
  name: string;
  colour: string;
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

export type RoomState = {
  isGameRunning: boolean;
  password: string;
  hostId: string;
  players: Player[];
  guesses: Guess[];
  word: Word;
};
