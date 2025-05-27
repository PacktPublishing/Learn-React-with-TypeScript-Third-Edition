import { useState, type ReactNode } from 'react';
import './Alert.css';

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
    <div className={`container ${type}`}>
      <div className="header">
        <span
          role="img"
          aria-label={type === 'warning' ? 'Warning' : 'Information'}
          className="header-icon"
        >
          {type === 'warning' ? '⚠' : 'ℹ️'}
        </span>
        <span className="header-text">{heading}</span>
        {closable && (
          <button aria-label="Close" className="close-button" onClick={handleCloseClick}>
            <span role="img" aria-label="Close">
              ❌
            </span>
          </button>
        )}
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
