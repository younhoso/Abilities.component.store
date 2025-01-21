import styled from 'styled-components';

export const ButtonStyled = styled.div`
  display: flex;
  flex: 1;
  button {
    border: 1px solid #eee;
    padding: 16px;
    border-radius: 10px;
  }
  .disabled {
    width: 100%;
    opacity: 0.5;
    color: ${props => props.theme.colors.white};
  }
  .secondary {
    cursor: pointer;
    width: 100%;
    border: 1px solid #eee;
  }
  .primary {
    cursor: pointer;
    width: 100%;
    background-color: red;
    border: 1px solid transparent;
  }
`;

export const ButtonInnerStyled = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
