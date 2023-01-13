import React from 'react';
import { Guess } from '../../types';

type Props = {
  guesses: Guess[] | undefined;
};

export const Status = ({ guesses }: Props) => {
  return (
    <div>
      {guesses?.map((guess) => (
        <p style={{ color: `#${guess.colour}` }}>
          {guess.playerName} - {guess.word}
        </p>
      ))}
    </div>
  );
};
