import styled from 'styled-components';

interface ButtonProps {
  size: 'sm' | 'md' | 'lg';
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
  button {
    border: 1px solid #eee;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-weight: 500;

    padding: ${({ size }) => {
      switch (size) {
        case 'sm':
          return '8px 12px';
        case 'md':
          return '12px 16px';
        case 'lg':
          return '16px 20px';
        default:
          return '12px 16px';
      }
    }};
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
