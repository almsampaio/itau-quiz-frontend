import loadingOrange from 'assets/loadingOrange.svg';
import loadingWhite from 'assets/loadingWhite.svg';

import * as S from './styles';

interface LoadingProps {
  color: 'white' | 'orange';
}

export default function Loading({ color }: LoadingProps): JSX.Element {
  return (
    <S.Container>
      {color === 'white' ? (
        <img src={loadingWhite} alt="Carregando" />
      ) : (
        <img src={loadingOrange} alt="Carregando" />
      )}
    </S.Container>
  );
}
