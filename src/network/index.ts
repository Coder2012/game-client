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
    console.log('state:', state);
    gameService.networkUpdate({
      ...state,
      timestamp: Date.now(),
      sessionId: room.sessionId,
    });
  });

  room.onLeave((code) => {
    console.log(`client left the room = ${code}`);
  });

  room.onMessage('navigation', (path: string) => {
    gameService.navigation(path);
  });

  room.onMessage('powerup', (message) => {
    console.log('message received from server');
    console.log(message);
  });
};

export const send = (type, payload) => {
  room.send(type, payload);
};
