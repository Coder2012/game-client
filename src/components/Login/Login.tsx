import { useState } from 'react';
import { ConnectionMetadata } from '../../types';

import appStyles from '../../app.module.scss';
import styles from './login.module.scss';

type Props = {
  joinGameHandler: ({ playerName, password }: ConnectionMetadata) => void;
};

export const Login = ({ joinGameHandler }: Props) => {
  const [password, setPassword] = useState('');
  const [playerName, setPlayerName] = useState('');

  const onNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  const onPasswordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Enter your name and a password to join</h2>
      <div className={styles.formRow}>
        <label htmlFor="name">Name</label>
        <input name="name" type="text" onChange={onNameChangeHandler} />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="password">Password</label>
        <input name="password" type="text" onChange={onPasswordChangeHandler} />
      </div>
      <button className={appStyles.button} type="button" onClick={() => joinGameHandler({ password, playerName })}>
        Join Game
      </button>
    </div>
  );
};
