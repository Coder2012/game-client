import { ConnectionMetadata, RoomState } from '../types';
import { Login } from '../components/Login/Login';
import styles from '../app.module.scss';
import { Players } from '../components/Players/Players';
import { Header } from '../components/Header/Header';

type Props = {
  room: RoomState | null;
  onJoinGameHandler: (data: ConnectionMetadata) => Promise<void>;
  onRemovePlayerClickHandler: (id: string) => void;
  onStartGameHandler: () => void;
  hasJoinedGame: boolean;
};

export const Home = ({
  room,
  onJoinGameHandler,
  onStartGameHandler,
  onRemovePlayerClickHandler,
  hasJoinedGame,
}: Props) => {
  return (
    <div className={styles.container}>
      {/* <Header /> */}
      {!hasJoinedGame && <Login joinGameHandler={onJoinGameHandler} />}
      {room?.players?.length && <Players room={room} removePlayerClickHandler={onRemovePlayerClickHandler} />}
      {room?.isGameOver && !room?.isGameRunning && room?.hostId && room?.players?.length > 1 && (
        <button type="button" onClick={onStartGameHandler}>
          Start Game
        </button>
      )}
    </div>
  );
};
