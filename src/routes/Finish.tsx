import { Players } from '../components/Players/Players';
import { RoomState } from '../types';
import styles from '../app.module.scss';

type Props = {
  room: RoomState | null;
};

export const Finish = ({ room }: Props) => {
  const winners = room?.players.filter((player) => player.score === 5);
  return winners ? (
    <div className={styles.container}>
      {room?.players?.length && <Players room={room} />}
      <h1>Congratulations to our {winners?.length > 1 ? 'winners' : 'winner'}</h1>
      <ul className={styles.winners}>
        {winners.map((player) => (
          <li className={styles.flash}>{player.name}</li>
        ))}
      </ul>
    </div>
  ) : null;
};
