import { $game as $ } from './store';
import { networkUpdate, navigation, timer } from './events';

export const gameService = {
  $,
  networkUpdate,
  navigation,
  timer,
};
