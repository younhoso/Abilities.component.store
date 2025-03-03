'use client';

import styled from 'styled-components';

export const HeaderStyled = styled.div`
  width: 100%;
  height: 84px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #1c2536;
  border-right: 1px solid ${props => props.theme.colors.gray4e4};
  color: ${props => props.theme.colors.white};
  z-index: 1;
`;
