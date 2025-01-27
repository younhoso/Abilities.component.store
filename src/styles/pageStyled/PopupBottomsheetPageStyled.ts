'use client';

import styled from 'styled-components';

export const PopupBottomsheetPageStyled = styled.div`
  padding: 0 12px;
  ul {
    > li {
      height: auto;
      padding: 8px 0;
      border-bottom: 1px solid ${props => props.theme.colors.gray4e4};
    }
  }
`;
