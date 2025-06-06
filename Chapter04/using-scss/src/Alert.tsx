import { useState, type ReactNode } from 'react';
import './Alert.scss';
import crossIcon from './assets/cross.svg';
import infoIcon from './assets/info.svg';
import warningIcon from './assets/warning.svg';

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
        <img
          src={type === 'warning' ? warningIcon : infoIcon}
          alt={type === 'warning' ? 'Warning' : 'Information'}
          style={{ width: '22px' }}
        />
        <span className="header-text">{heading}</span>
        {closable && (
          <button aria-label="Close" className="close-button" onClick={handleCloseClick}>
            <img src={crossIcon} alt="Close" />
          </button>
        )}
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
