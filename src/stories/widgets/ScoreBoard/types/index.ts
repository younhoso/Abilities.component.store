import { StaticImageData } from 'next/image';

type LogoUrl = string | StaticImageData;

interface TeamInfo {
  name: string;
  logoUrl: LogoUrl;
  score: number;
}

export interface ScoreBoardProps {
  date: string;
  TeamA: TeamInfo;
  TeamB: TeamInfo;
  sportName?: string;
}

export interface TeamSectionProps {
  team: TeamInfo;
}
