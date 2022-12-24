// @ts-nocheck
import { RoomState } from '../../types';
import { domain } from '../domain';
import { networkUpdate } from './events';

let room: RoomState | null;

const initialState = {
  room,
};

export const $game = domain
  .createStore(initialState, { name: 'game store' })
  .on(networkUpdate, (state, room) => ({ ...state, room }));
