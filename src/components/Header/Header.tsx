import gsap, { Linear } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { gameService } from '../../services/game';
import styles from './Header.module.scss';

export const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [timer, setTimer] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const unwatch = gameService.timer.watch((t) => t && setTimer(t));

  useEffect(() => {
    if (timer !== 0) {
      setTimeout(() => {
        console.log('timer up');
        setTimer(0);
      }, timer);
      gsap.set(ref.current, { width: '100%' });
      gsap.to(ref.current, { width: '0%', duration: timer / 1000, ease: Linear.easeNone });
    }
  }, [timer]);

  return (
    <section className={styles.title}>
      <div className={styles.timer} ref={ref}></div>
      <h1>Trivia - First to 5</h1>
    </section>
  );
};
