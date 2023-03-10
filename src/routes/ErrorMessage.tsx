import styles from '../app.module.scss';

export const ErrorMessage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.title}>
        <h1>Word Quiz - First to 5</h1>
      </section>
      <h1>You have left the game!</h1>
    </div>
  );
};
