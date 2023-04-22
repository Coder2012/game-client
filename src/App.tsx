import { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import type { ConnectionMetadata } from './types';

import { connect, send } from './network';

import { Home } from './routes/Home';
import { gameService } from './services/game';
import { Game } from './routes/Game';
import { Finish } from './routes/Finish';
import { ErrorMessage } from './routes/ErrorMessage';

function App() {
  const [hasJoinedGame, setHasJoinedGame] = useState(false);
  const [path, setPath] = useState<string>('home');
  const { room } = useStore(gameService.$);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const unwatch = gameService.navigation.watch((path) => path && setPath(path));

  useEffect(() => {
    console.log('App mounted');
  }, []);

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
    <>
      {path === 'home' && (
        <Home
          room={room}
          onJoinGameHandler={onJoinGameHandler}
          onRemovePlayerClickHandler={onRemovePlayerClickHandler}
          onStartGameHandler={onStartGameHandler}
          hasJoinedGame={hasJoinedGame}
        />
      )}
      {path === 'game' && <Game room={room} onGuessHandler={onGuessHandler} />}
      {path === 'finish' && <Finish room={room} />}
      {path === 'error' && <ErrorMessage />}
    </>
  );
}

export default App;
