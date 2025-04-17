import styled from 'styled-components';

export const ButtonStyled = styled.div`
  width: 100%;
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

  button {
    border: 1px solid #eee;
    padding: 16px;
    border-radius: 10px;
  }
  .disabled {
    width: 100%;
    opacity: 0.5;
    color: ${props => props.theme.colors.black};
    background-color: #ccc;
  }
  .secondary {
    cursor: pointer;
    width: 100%;
    border: 1px solid #eaeaec;
    background-color: #eee;
  }
  .primary {
    cursor: pointer;
    width: 100%;
    background-color: ${props => props.theme.colors.main260};
    color: ${props => props.theme.colors.white};
    border: 1px solid transparent;
  }

  .loading {
    display: flex;
  }
`;

export const ButtonItemStyled = styled.div`
  width: 100%;

  button {
    border: 1px solid #eee;
    padding: 16px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-weight: 500;
  }

  .disabled {
    width: 100%;
    opacity: 0.5;
    color: ${props => props.theme.colors.black};
    background-color: #ccc;
  }

  .secondary {
    cursor: pointer;
    width: 100%;
    border: 1px solid #eaeaec;
    background-color: #eee;
  }

  .primary {
    cursor: pointer;
    width: 100%;
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
