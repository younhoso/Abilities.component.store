import styled from 'styled-components';

interface ButtonProps {
  size: 'sm' | 'md' | 'lg' | 'full';
}

export const ButtonStyled = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ButtonItemStyled = styled.div<ButtonProps>`
  display: inline-block;
  width: ${({ size }) => {
    switch (size) {
      case 'sm':
        return 'auto';
      case 'md':
        return 'auto';
      case 'lg':
        return 'auto';
      case 'full':
        return '100%';
      default:
        return 'auto';
    }
  }};

  button {
    width: 100%;
    border: 1px solid #eee;
    border-radius: 10px;
    font-weight: 500;
    position: relative;
    overflow: hidden;

    padding: ${({ size }) => {
      switch (size) {
        case 'sm':
          return '4px 8px';
        case 'md':
          return '8px 16px';
        case 'lg':
          return '16px 20px';
        default:
          return '12px 16px';
      }
    }};
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(110, 110, 110, 0.5);
    transform: scale(0);
    animation: ripple-animation 600ms linear;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  .disabled {
    opacity: 0.5;
    color: ${props => props.theme.colors.black};
    background-color: #ccc;
  }

  .secondary {
    cursor: pointer;
    border: 1px solid #eaeaec;
    background-color: #eee;
  }

  .primary {
    cursor: pointer;
    background-color: ${props => props.theme.colors.main260};
    color: ${props => props.theme.colors.white};
    border: 1px solid transparent;
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .spinner {
    width: 16px;
    height: 16px;
    animation: spin 1s linear infinite;
  }

  .path {
    stroke: ${props => props.theme.colors.white};
    stroke-linecap: round;
    stroke-opacity: 0.6;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
