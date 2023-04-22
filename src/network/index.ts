// @ts-nocheck
import * as Colyseus from 'colyseus.js';
import { gameService } from '../services/game';
import { ConnectionMetadata } from '../types';

let room;

export const connect = async ({ playerName, password }: ConnectionMetadata) => {
  const client = new Colyseus.Client(process.env.REACT_APP_GAME_SERVER || 'ws://localhost:5000');
  console.log(process.env.REACT_APP_GAME_SERVER);

  room = await client.joinOrCreate('room', { playerName, password });

  room.onStateChange((state) => {
    gameService.networkUpdate({
      ...state,
      timestamp: Date.now(),
      sessionId: room.sessionId,
    });
  });

  room.onLeave((code) => {
    console.log(`client left the room = ${code}`);
    gameService.navigation('error');
  });

  room.onMessage('navigation', (path: string) => {
    gameService.navigation(path);
  });

  room.onMessage('timer', (value) => {
    gameService.timer(value);
  });
};

export const send = (type, payload) => {
  room.send(type, payload);
};
