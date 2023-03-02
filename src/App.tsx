import { useState } from 'react';
import { useStore } from 'effector-react';
import type { ConnectionMetadata } from './types';

import { connect, send } from './network';

import { Home } from './routes/Home/Home';
import { gameService } from './services/game';
import { Game } from './routes/Home/Game';
import { Finish } from './routes/Home/Finish';

function App() {
  const [hasJoinedGame, setHasJoinedGame] = useState(false);
  const [path, setPath] = useState<string>('home');
  const { room } = useStore(gameService.$);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const unwatch = gameService.navigation.watch((path) => path && setPath(path));

  const componentMap: any = {
    home: {
      component: () => (
        <Home
          room={room}
          onJoinGameHandler={onJoinGameHandler}
          onRemovePlayerClickHandler={onRemovePlayerClickHandler}
          onStartGameHandler={onStartGameHandler}
          hasJoinedGame={hasJoinedGame}
        />
      ),
    },
    game: {
      component: () => <Game room={room} onGuessHandler={onGuessHandler} />,
    },
    finish: {
      component: () => <Finish room={room} />,
    },
  };

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

  const Component = componentMap[path].component;

  return (
    <>
      <Component />
    </>
  );
}

export default App;
