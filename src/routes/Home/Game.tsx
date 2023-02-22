import { Guess } from '../../components/Guess/Guess';
import { Guesses } from '../../components/Guess/Guesses';
import { Players } from '../../components/Players/Players';
import { Status } from '../../components/Status/Status';
import styles from '../../app.module.scss';
import { RoomState } from '../../types';

type Props = {
  room: RoomState | null;
  onGuessHandler: (value: string) => void;
};

export const Game = ({ room, onGuessHandler }: Props) => {
  //
  return (
    <div className={styles.container}>
      <section className={styles.title}>
        <h1>Word Quiz - First to 5</h1>
      </section>
      {room?.players?.length && <Players room={room} />}
      {room?.word.text && (
        <div>
          {room?.word.text} - {room?.word.description}
        </div>
      )}
      {room?.winner?.player && <Status winner={room?.winner} />}
      {room?.isGameRunning && room?.word.text && <Guess guessHandler={onGuessHandler} />}
      <Guesses guesses={room?.guesses}></Guesses>
    </div>
  );
};
