import { useState, type ReactNode } from 'react';
import styles from './Alert.module.css';

console.log('styles', styles);
type Props = {
  type?: string;
  heading: string;
  children: ReactNode;
  closable?: boolean;
  onClose?: () => void;
};

export function Alert({ type = 'information', heading, children, closable, onClose }: Props) {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return null;
  }
  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }
  return (
    <div className={`${styles.container} ${styles[type]}`}>
      <div className={styles.header}>
        <span
          role="img"
          aria-label={type === 'warning' ? 'Warning' : 'Information'}
          className={styles.headerIcon}
        >
          {type === 'warning' ? '⚠' : 'ℹ️'}
        </span>
        <span className={styles.headerText}>{heading}</span>
        {closable && (
          <button aria-label="Close" className={styles.closeButton} onClick={handleCloseClick}>
            <span role="img" aria-label="Close">
              ❌
            </span>
          </button>
        )}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
