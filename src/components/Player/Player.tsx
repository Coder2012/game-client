import react from 'react';
import styles from './player.module.scss';

type Props = {
  id: string;
  name: string;
  colour: string;
  canRemove: boolean;
  clickHandler: (id: string) => void;
};

export const Player = ({ id, name, colour, canRemove, clickHandler }: Props) => (
  <div className={styles.container}>
    <p className={styles.name} style={{ color: `#${colour}` }}>
      {name}
    </p>
    {canRemove && (
      <button className={styles.removeButton} type="button" onClick={() => clickHandler(id)}>
        Remove
      </button>
    )}
  </div>
);
