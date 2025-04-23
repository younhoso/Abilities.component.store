import { AvatarFallbackStyled } from './styled';

interface Props extends PropsWithChildren {
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
}

const AvatarFallback = ({ justify, children }: Props) => {
  return <AvatarFallbackStyled justify={justify}>{children}</AvatarFallbackStyled>;
};

export default AvatarFallback;
