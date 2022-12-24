import { $game as $ } from './store';
import { networkUpdate, nameRequest } from './events';

export const gameService = {
  $,
  networkUpdate,
  nameRequest,
};
