import { useRef, useState } from 'react';
import { gameService } from '../../services/game';
import styles from './Header.module.scss';

export const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [timer, setTimer] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const unwatch = gameService.timer.watch((t) => setTimer(t));

  return (
    <section className={styles.container}>
      <div className={styles.timer} ref={ref}>
        <span className={styles.value}>{timer / 1000}</span>
      </div>
      <h1 className={styles.title}>Trivia - First to 5</h1>
    </section>
  );
};
