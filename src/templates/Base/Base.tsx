import {
  Container,
  MediaMatch,
  Navbar,
  Header,
  CurrencySection,
  CotationProps,
} from 'components';
import { CoinProps } from 'types/coin';

export type BaseProps = {
  mostViewed: CoinProps[];
  children: React.ReactNode;
  cotations: CotationProps[];
};

export const Base = ({ mostViewed, cotations, children }: BaseProps) => {
  return (
    <Container>
      <MediaMatch lessThan="large">
        <Navbar />
      </MediaMatch>
      <Header items={mostViewed} />
      <CurrencySection cotations={cotations} />
      {children}
    </Container>
  );
};
