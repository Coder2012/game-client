import React from 'react';
import { Winner } from '../../types';

type Props = {
  winner: Winner;
};

export const Status = ({ winner }: Props) => {
  const { player, word }: Winner = winner;

  return (
    <div>
      <p>
        Well done {player.name.toUpperCase()} you guessed {word.toUpperCase()}!
      </p>
      <p>Get ready for the next word...</p>
    </div>
  );
};
