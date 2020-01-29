import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
    </div>
  );
}
