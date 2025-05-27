import { useState, type ReactNode } from 'react';
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
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        textAlign: 'left',
        padding: '1em',
        borderRadius: '4px',
        border: '1px solid transparent',
        backgroundColor: type === 'warning' ? '#f3e8da' : '#dcf1f3',
        color: type === 'warning' ? '#e7650f' : '#118da0',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.1em' }}>
        <img
          src={type === 'warning' ? warningIcon : infoIcon}
          alt={type === 'warning' ? 'Warning' : 'Information'}
          style={{ width: '22px' }}
        />
        <span style={{ fontWeight: 'bold' }}>{heading}</span>
        {closable && (
          <button
            aria-label="Close"
            style={{
              marginLeft: 'auto',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              height: '24px',
              width: '24px',
              padding: '0',
              cursor: 'pointer',
            }}
            onClick={handleCloseClick}
          >
            <img src={crossIcon} alt="Close" />
          </button>
        )}
      </div>
      <div
        style={{
          margin: '0 1.2em 0 1.85em',
          color: '#000',
        }}
      >
        {children}
      </div>
    </div>
  );
}
