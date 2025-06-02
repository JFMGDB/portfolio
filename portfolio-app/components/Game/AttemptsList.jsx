import styles from './AttemptsList.module.css';

export default function AttemptsList({ attempts }) {
  if (attempts.length === 0) {
    return <p className={styles.noAttemptsMessage}>Nenhuma tentativa feita ainda.</p>;
  }

  return (
    <div className={styles.attemptsContainer}>
      <h3 className={styles.attemptsTitle}>Tentativas Anteriores:</h3>
      <ul className={styles.attemptsList}>
        {attempts.map((attempt, index) => (
          <li key={index} className={styles.attemptItem}>
            <div>
              <span className={styles.attemptNumber}>Tentativa {attempts.length - index}:</span>
              <span className={styles.attemptGuess}>{attempt.guess}</span>
            </div>
            <div className={styles.attemptFeedback}>
              <span>Touros: <strong>{attempt.bulls}</strong></span>
              <span>Feridos: <strong>{attempt.cows}</strong></span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}