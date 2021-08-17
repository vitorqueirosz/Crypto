import { CoinProps } from 'constants/types/coin';
import { Coin } from 'components';

import * as S from './Section.styles';

export type SectionProps = {
  title: string;
  items: CoinProps[];
};

const coinsTitle = {
  bitcoin: 'BITCOIN',
  ethereum: 'ETHEREUM',
  cardano: 'CARDANO (ADA)',
  others: 'OTHERS',
} as { [key: string]: string };

export const Section = ({ title, items }: SectionProps) => {
  return (
    <S.Section>
      <S.SubTitle>{coinsTitle[title]}</S.SubTitle>
      <S.Content>
        {items.map((item) => (
          <Coin key={item.id} {...item} />
        ))}
      </S.Content>
    </S.Section>
  );
};
