import classNames from 'classnames';
import styles from './player.module.scss';

type Props = {
  id: string;
  name: string;
  colour: string;
  score: number;
  canRemove: boolean;
  clickHandler?: (id: string) => void;
};

export const Player = ({ id, name, colour, score, canRemove, clickHandler }: Props) => (
  <div className={styles.container}>
    <h2 className={styles.name} style={{ color: `#${colour}` }}>
      {name}
    </h2>
    {[...new Array(5)].map((_, index) => (
      <span key={index} className={classNames(styles.swatch, { [styles['swatch--correct']]: index < score })}></span>
    ))}

    {canRemove && (
      <button
        className={styles.removeButton}
        type="button"
        {...(clickHandler
          ? {
              onClick: () => clickHandler(id),
            }
          : {})}
      >
        Remove
      </button>
    )}
  </div>
);
