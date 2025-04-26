'use client';

import styled from 'styled-components';

interface ScoreNumberProps {
  isWin: boolean;
}

interface ClickAreaProps {
  position: 'left' | 'right';
}

export const MatchResultWrapperStyled = styled.div`
  background: #084c38;
  color: #fff;
  text-align: center;
  padding: 1.5rem 1rem;
  border-radius: 12px;
  position: relative;
`;

export const MatchDateStyled = styled.div`
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 1rem;
`;

export const TeamsWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
`;

export const TeamStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TeamLogoWrapperStyled = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  margin-bottom: 0.5rem;
`;

export const TeamNameStyled = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
`;

export const ScoreStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ScoreWrapperStyled = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ScoreNumberStyled = styled.span.withConfig({
  shouldForwardProp: prop => prop !== 'isWin',
})<ScoreNumberProps>`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ isWin }) => (isWin ? '#ffc107' : '#c9c9c9')};
`;

export const HomeBadgeStyled = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 0.2rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

export const ClickAreaStyled = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'position',
})<ClickAreaProps>`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  z-index: 10;
  cursor: pointer;

  ${({ position }) => (position === 'left' ? 'left: 0;' : 'right: 0;')}
`;
