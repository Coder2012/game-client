import { KeyboardEvent, useState } from 'react';

import styles from './guess.module.scss';

type Props = {
  guessHandler: (value: string) => void;
};

export const Guess = ({ guessHandler }: Props) => {
  const [guess, setGuess] = useState('');

  const onGuessChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(event.target.value);
  };

  const onSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
    if ((event as KeyboardEvent).key === 'Enter') {
      guessHandler(guess);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Enter your guess</h2>
      <div className={styles.formRow}>
        <label htmlFor="guess">Guess</label>
        <input name="guess" type="text" onChange={onGuessChangeHandler} onKeyUp={onSubmit} />
      </div>
      <button className={styles.joinButton} type="button" onClick={() => guessHandler(guess)}>
        Guess
      </button>
    </div>
  );
};
