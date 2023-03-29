import { useAnimateText } from '../../hooks/useAnimateText';

type Props = {
  id: string;
  text: string;
};

export const AnimatedText = ({ id, text }: Props) => {
  let textRef = useAnimateText(id);

  return (
    <p ref={textRef} id={id}>
      {text}
    </p>
  );
};
