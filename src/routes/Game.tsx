import classNames from 'classnames';
import { Players } from '../components/Players/Players';
import { useEffect, useState } from 'react';
import { RoomState } from '../types';
import { AnimatedText } from '../components/AnimatedText/AmimatedText';
import { Header } from '../components/Header/Header';
import styles from '../app.module.scss';

type Props = {
  room: RoomState | null;
  onGuessHandler: (value: string) => void;
};

export const Game = ({ room, onGuessHandler }: Props) => {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    if (!room?.answer) {
      setSelected('');
    }
  }, [room?.answer]);

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
                      className={classNames(styles.button, { [styles.buttonSelected]: selected === key })}
                      type="button"
                      onClick={() => {
                        setSelected(key);
                        onGuessHandler(key);
                      }}
                    >
                      {key} - {value}
                    </button>
                  ) : (
                    <button
                      className={classNames(styles.answerButton, {
                        [styles.answerButtonCorrect]: key === room?.answer,
                        [styles.answerButtonPlayerCorrect]: selected === key && selected === room?.answer,
                      })}
                    >
                      {key} - {value}
                    </button>
                  )}
                </li>
              ))}
          </ol>
        </>
      )}
      {room?.answer && (
        <div className={styles.status}>
          <p>The correct answer was {room?.answer}</p>
          <p>Get ready for the next question!</p>
        </div>
      )}
    </div>
  );
};
