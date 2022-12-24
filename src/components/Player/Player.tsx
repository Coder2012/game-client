import react from 'react';
import styles from './player.module.scss';

type Props = {
  id: string;
  name: string;
  canRemove: boolean;
  clickHandler: (id: string) => void;
};

export const Player = ({ id, name, canRemove, clickHandler }: Props) => (
  <div className={styles.container}>
    <p className={styles.name}>{name}</p>
    {canRemove && (
      <button className={styles.removeButton} type="button" onClick={() => clickHandler(id)}>
        Remove
      </button>
    )}
  </div>
);
