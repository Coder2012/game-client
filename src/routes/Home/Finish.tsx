import { Guess } from '../../components/Guess/Guess';
import { Guesses } from '../../components/Guess/Guesses';
import { Players } from '../../components/Players/Players';
import { Status } from '../../components/Status/Status';
import styles from '../../app.module.scss';
import { RoomState } from '../../types';

type Props = {
  room: RoomState | null;
};

export const Finish = ({ room }: Props) => {
  const winner = room?.players.find((player) => player.score === 5);
  return (
    <div className={styles.container}>
      <section className={styles.title}>
        <h1>Word Quiz - First to 5</h1>
      </section>
      {room?.players?.length && <Players room={room} />}
      <h1 style={{ color: `#${winner?.colour}` }}>Congratulations to {winner?.name}! You won this match</h1>
    </div>
  );
};
