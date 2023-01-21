import React from 'react';
import { Winner } from '../../types';

type Props = {
  winner: Winner;
};

export const Status = ({ winner }: Props) => {
  const { player, word }: Winner = winner;

  return (
    <div>
      <p>Game over</p>
      <p>
        The winner is {player.name} who guessed {word}!
      </p>
    </div>
  );
};
