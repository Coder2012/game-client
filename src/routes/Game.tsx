import { Players } from '../components/Players/Players';
import styles from '../app.module.scss';
import { RoomState } from '../types';

type Props = {
  room: RoomState | null;
  onGuessHandler: (value: string) => void;
};

export const Game = ({ room, onGuessHandler }: Props) => {
  //
  return (
    <div className={styles.container}>
      <section className={styles.title}>
        <h1>Trivia - First to 5</h1>
      </section>
      {room?.players?.length && <Players room={room} />}
      {room?.question && (
        <>
          <p>Q:{room?.question.description}</p>
          <ol>
            {room?.question.options &&
              Object.entries(room?.question.options).map(([key, value]) => (
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      if (!room?.answer) onGuessHandler(key);
                    }}
                  >
                    {key} - {value}
                  </button>
                </li>
              ))}
          </ol>
        </>
      )}
      {room?.answer && (
        <>
          <p>The correct answer was {room?.answer}</p>
          <ul>
            {room?.players.map((player) => (
              <li>
                {player.name} - {player.lastAnswer} was {room?.answer === player.lastAnswer ? 'correct' : 'incorrect'}
              </li>
            ))}
          </ul>
          <p>Get ready for the next question!</p>
        </>
      )}
    </div>
  );
};
