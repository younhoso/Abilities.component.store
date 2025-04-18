'use client';

import styled from 'styled-components';

import { RoleType } from '../../types/Role';

interface RoleBadgeProps {
  roleColor: RoleType;
}

export const RoleBadgeStyled = styled.div<RoleBadgeProps>`
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 100%;
  background-color: ${({ roleColor }) => roleColor.color}; // roleColor에 따라 배경색 설정

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
