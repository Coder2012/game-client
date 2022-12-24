export type ConnectionMetadata = {
  playerName: string;
  password: string;
};

export type Player = {
  id: string;
  name: string;
};

type Word = {
  text: string;
  description: string;
};

export type RoomState = {
  isGameRunning: boolean;
  password: string;
  hostId: string;
  players: Player[];
  word: Word;
};
