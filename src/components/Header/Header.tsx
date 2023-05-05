// import gsap, { Linear } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { gameService } from '../../services/game';
import styles from './Header.module.scss';

export const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [timer, setTimer] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const unwatch = gameService.timer.watch((t) => setTimer(t));

  useEffect(() => {
    console.log(`timers: ${timer}`);
  }, [timer]);

  return (
    <section className={styles.title}>
      <div className={styles.timer} ref={ref}></div>
      <h1>Trivia - First to 5</h1>
    </section>
  );
};
