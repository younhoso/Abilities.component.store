import styled from 'styled-components';

export const ButtonStyled = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-between;

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
    border: 1px solid transparent;
  }
`;

export const ButtonItemStyled = styled.div`
  width: 100%;
`;
