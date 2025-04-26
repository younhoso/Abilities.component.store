'use client';

import { useMemo, useRef, useState } from 'react';

import { StaticImageData } from 'next/image';

import { delay } from '@/utils/delay';

import TeamSection from './TeamSection';
import {
  ClickAreaStyled,
  HomeBadgeStyled,
  MatchDateStyled,
  MatchResultWrapperStyled,
  ScoreNumberStyled,
  ScoreStyled,
  ScoreWrapperStyled,
  TeamsWrapperStyled,
} from './styled';

type LogoUrl = string | StaticImageData;

interface Props {
  date: string;
  TeamA: {
    name: string;
    logoUrl: LogoUrl;
    score: number;
  };
  TeamB: {
    name: string;
    logoUrl: LogoUrl;
    score: number;
  };
  sport?: string;
}

const DELAY_MS = 250;

const ScoreBoard = ({ date, TeamA, TeamB, sport }: Props) => {
  const [teamAScore, setTeamAScore] = useState(TeamA.score);
  const [teamBScore, setTeamBScore] = useState(TeamB.score);

  const clickFlagRef = useRef({ left: false, right: false });

  const isTeamAWin = useMemo(() => teamAScore > teamBScore, [teamAScore, teamBScore]);
  const isTeamBWin = useMemo(() => teamBScore > teamAScore, [teamAScore, teamBScore]);

  const handleClick = async (side: 'left' | 'right') => {
    clickFlagRef.current[side] = true;
    await delay(DELAY_MS);
    if (clickFlagRef.current[side]) {
      side === 'left' ? setTeamAScore(prev => prev + 1) : setTeamBScore(prev => prev + 1);
    }
    clickFlagRef.current[side] = false;
  };

  const handleDoubleClick = (side: 'left' | 'right') => {
    clickFlagRef.current[side] = false;
    side === 'left'
      ? setTeamAScore(prev => Math.max(prev - 1, 0))
      : setTeamBScore(prev => Math.max(prev - 1, 0));
  };

  return (
    <MatchResultWrapperStyled>
      <MatchDateStyled>{date}</MatchDateStyled>

      <TeamsWrapperStyled>
        <TeamSection team={TeamA} />

        <ScoreWrapperStyled>
          <ScoreStyled>
            <ScoreNumberStyled isWin={isTeamAWin}>{teamAScore}</ScoreNumberStyled>
            <span>:</span>
            <ScoreNumberStyled isWin={isTeamBWin}>{teamBScore}</ScoreNumberStyled>
          </ScoreStyled>

          <ClickAreaStyled
            onClick={() => handleClick('left')}
            onDoubleClick={() => handleDoubleClick('left')}
            position="left"
          />
          <ClickAreaStyled
            onClick={() => handleClick('right')}
            onDoubleClick={() => handleDoubleClick('right')}
            position="right"
          />

          {sport && <HomeBadgeStyled>{sport}</HomeBadgeStyled>}
        </ScoreWrapperStyled>

        <TeamSection team={TeamB} />
      </TeamsWrapperStyled>
    </MatchResultWrapperStyled>
  );
};

export default ScoreBoard;
