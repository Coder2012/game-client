import { useState } from 'react';
import { useStore } from 'effector-react';

import { connect, send } from './network';
import { gameService } from './services/game';

import type { ConnectionMetadata } from './types';
import styles from './app.module.scss';
import { Header } from './components/Header/Header';
import { Players } from './components/Players/Players';
import { Guess } from './components/Guess/Guess';

function App() {
  const [hasJoinedGame, setHasJoinedGame] = useState(false);
  const { room } = useStore(gameService.$);

  const onJoinGameHandler = async (data: ConnectionMetadata) => {
    try {
      await connect(data);
      setHasJoinedGame(true);
    } catch (error) {
      setHasJoinedGame(false);
      console.error(`Error connecting`, error);
    }
  };

  const onStartGameHandler = () => {
    send('startGame', room?.hostId);
  };

  const onRemovePlayerClickHandler = (id: string) => {
    send('removePlayer', id);
  };

  const onGuessHandler = (value: string) => {
    send('playerGuess', value);
    console.log('guess ', value);
  };

  return (
    <div className={styles.container}>
      {!hasJoinedGame && <Header joinGameHandler={onJoinGameHandler} />}
      <Players room={room} removePlayerClickHandler={onRemovePlayerClickHandler} />
      {room?.word.text && (
        <div>
          {room?.word.text} - {room?.word.description}
        </div>
      )}
      {!room?.isGameRunning && room?.hostId && (
        <button type="button" onClick={onStartGameHandler}>
          Start Game
        </button>
      )}
      {room?.isGameRunning && room?.word.text && <Guess guessHandler={onGuessHandler} />}
      <p>{room?.guesses.map((guess) => guess).join(' ')}</p>
    </div>
  );
}

export default App;
