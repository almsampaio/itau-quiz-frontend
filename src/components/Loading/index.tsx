import loadingOrange from 'assets/loadingOrange.svg';
import loadingWhite from 'assets/loadingWhite.svg';

import { Container } from './styles';

interface LoadingProps {
  color: 'white' | 'orange';
}

export function Loading({ color }: LoadingProps): JSX.Element {
  return (
    <Container>
      {color === 'white' ? (
        <img src={loadingWhite} alt="Carregando" />
      ) : (
        <img src={loadingOrange} alt="Carregando" />
      )}
    </Container>
  );
}
