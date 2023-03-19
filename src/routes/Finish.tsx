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
      <section className={styles.title}>
        <h1>Word Quiz - First to 5</h1>
      </section>
      {room?.players?.length && <Players room={room} />}
      <h1>Congratulations to our {winners?.length > 1 ? 'winners' : 'winner'}</h1>
      <ul>
        {winners.map((player) => (
          <li style={{ color: `${player.colour}` }}>{player.name}</li>
        ))}
      </ul>
    </div>
  ) : null;
};
