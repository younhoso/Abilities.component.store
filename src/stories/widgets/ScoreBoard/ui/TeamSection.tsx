import Image from 'next/image';

import { TeamSectionProps } from '../types';
import { TeamLogoWrapperStyled, TeamNameStyled, TeamStyled } from './styled';

const TeamSection = ({ team }: TeamSectionProps) => {
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
