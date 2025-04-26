import Image, { StaticImageData } from 'next/image';

import { TeamLogoWrapperStyled, TeamNameStyled, TeamStyled } from './styled';

type LogoUrl = string | StaticImageData;

interface TeamInfo {
  name: string;
  logoUrl: LogoUrl;
  score: number;
}

interface Props {
  team: TeamInfo;
}

const TeamSection = ({ team }: Props) => {
  return (
    <TeamStyled>
      <TeamLogoWrapperStyled>
        <Image src={team.logoUrl} alt={team.name} fill style={{ objectFit: 'contain' }} />
      </TeamLogoWrapperStyled>
      <TeamNameStyled>{team.name}</TeamNameStyled>
    </TeamStyled>
  );
};

export default TeamSection;
