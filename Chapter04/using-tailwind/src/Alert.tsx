import { useState, type ReactNode } from 'react';

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
      className={`inline-flex flex-col rounded-md border-1 border-transparent p-3 text-left ${
        type === 'warning' ? 'text-amber-900' : 'text-teal-900'
      } ${type === 'warning' ? 'bg-amber-50' : 'bg-teal-50'} `}
    >
      <div className="mb-1 flex items-center">
        <span
          role="img"
          aria-label={type === 'warning' ? 'Warning' : 'Information'}
          className="w-7"
        >
          {type === 'warning' ? '⚠' : 'ℹ️'}
        </span>
        <span className="font-bold">{heading}</span>
        {closable && (
          <button
            aria-label="Close"
            className="ml-auto flex h-6 w-6 cursor-pointer items-center justify-center border-none bg-transparent p-0"
            onClick={handleCloseClick}
          >
            <span role="img" aria-label="Close">
              ❌
            </span>
          </button>
        )}
      </div>
      <div className="ml-7 pr-5 text-black">{children}</div>
    </div>
  );
}
