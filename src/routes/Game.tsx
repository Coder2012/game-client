import { Players } from '../components/Players/Players';
import { RoomState } from '../types';
import { AnimatedText } from '../components/AnimatedText/AmimatedText';
import styles from '../app.module.scss';
import { Header } from '../components/Header/Header';
import { useEffect, useState, useRef } from 'react';

type Props = {
  room: RoomState | null;
  onGuessHandler: (value: string) => void;
};

export const Game = ({ room, onGuessHandler }: Props) => {
  useEffect(() => {
    console.log('game:');
  }, []);
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
