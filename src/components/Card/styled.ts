import styled from 'styled-components';

export const CardStyled = styled.div`
  display: inline-block;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 0.5em;
  border: 1px solid #eee;
  box-sizing: border-box;
  padding: 20px;
`;

export const CardHeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const CardTitleStyled = styled.div`
  letter-spacing: -0.025em;
  font-weight: 600;
`;

export const CardDescriptionStyled = styled.div`
  font-size: 14px;
`;

export const CardContentStyled = styled.div`
  padding-bottom: 20px;
`;

export const CardFooterStyled = styled.div`
  display: flex;
  gap: 10px;
  .deploy {
    button {
      background-color: #333;
      color: #fff;
    }
  }
`;
