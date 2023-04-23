import { useAnimateText } from '../../hooks/useAnimateText';
import styles from './animatedText.module.scss';

type Props = {
  id: string;
  text: string;
};

export const AnimatedText = ({ id, text }: Props) => {
  let textRef = useAnimateText(id, text);

  return (
    <p className={styles.text} ref={textRef} id={id}>
      {text}
    </p>
  );
};
