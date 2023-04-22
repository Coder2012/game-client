import classNames from 'classnames';
import { Players } from '../components/Players/Players';
import { RoomState } from '../types';
import { AnimatedText } from '../components/AnimatedText/AmimatedText';
import { Header } from '../components/Header/Header';
import styles from '../app.module.scss';
import { Player } from '../components/Player/Player';

type Props = {
  room: RoomState | null;
  onGuessHandler: (value: string) => void;
};

export const Game = ({ room, onGuessHandler }: Props) => {
  return (
    <div className={styles.container}>
      <Header />
      {room?.players?.length && <Players room={room} />}
      {room?.question && (
        <>
          <AnimatedText id="text" text={room?.question.description} />
          <ol>
            {room?.question.options &&
              Object.entries(room?.question.options).map(([key, value]) => (
                <li>
                  {!room?.answer ? (
                    <button
                      className={styles.button}
                      type="button"
                      onClick={() => {
                        onGuessHandler(key);
                      }}
                    >
                      {key} - {value}
                    </button>
                  ) : (
                    <div
                      className={classNames(styles.answerButton, {
                        [styles.answerButtonCorrect]: key === room?.answer,
                      })}
                    >
                      {key} - {value}
                    </div>
                  )}
                </li>
              ))}
          </ol>
        </>
      )}
      {room?.answer && (
        <>
          <p>The correct answer was {room?.answer}</p>
          <p>Get ready for the next question!</p>
        </>
      )}
    </div>
  );
};
