import { RoomState } from '../../types';
import { Player } from '../Player/Player';

import styles from './players.module.scss';

type Props = {
  room: RoomState | null;
  removePlayerClickHandler?: (id: string) => void;
};

export const Players = ({ room, removePlayerClickHandler }: Props) => {
  return (
    <>
      <h2>Players</h2>
      <div className={styles.container}>
        {room?.players?.map((player) => (
          <Player
            key={player.id}
            id={player.id}
            colour={player.colour}
            name={player.name}
            score={player.score}
            canRemove={Boolean(!room?.isGameRunning && room?.hostId && player.id !== room?.hostId)}
            {...(removePlayerClickHandler
              ? {
                  clickHandler: (id: string) => {
                    removePlayerClickHandler(player.id);
                  },
                }
              : {})}
          />
        ))}
      </div>
    </>
  );
};
