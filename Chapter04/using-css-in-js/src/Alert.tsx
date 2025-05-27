import { useState, type ReactNode } from 'react';
import styled from 'styled-components';
import crossIcon from './assets/cross.svg';
import infoIcon from './assets/info.svg';
import warningIcon from './assets/warning.svg';

const Container = styled.div<{ type: string }>`
  display: inline-flex;
  flex-direction: column;
  text-align: left;
  padding: 1em;
  border-radius: 4px;
  border: 1px solid transparent;

  ${(props) =>
    props.type === 'warning' &&
    `
    color: #e7650f;
    background-color: #f3e8da;
  `}

  ${(props) =>
    props.type === 'information' &&
    `
    color: #118da0;
    background-color: #dcf1f3;
  `}
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.1em;
  img {
    width: 22px;
  }
`;

const HeaderText = styled.span`
  font-weight: bold;
`;

const CloseButton = styled.button`
  margin-left: auto;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  height: 24px;
  width: 24px;
  padding: 0;
  cursor: pointer;
`;

const Content = styled.div`
  margin: 0 1.2em 0 1.85em;
  color: #000;
`;

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
    <Container type={type}>
      <Header>
        <img
          src={type === 'warning' ? warningIcon : infoIcon}
          alt={type === 'warning' ? 'Warning' : 'Information'}
        />
        <HeaderText>{heading}</HeaderText>
        {closable && (
          <CloseButton aria-label="Close" onClick={handleCloseClick}>
            <img src={crossIcon} alt="Close" />
          </CloseButton>
        )}
      </Header>
      <Content>{children}</Content>
    </Container>
  );
}
