import { CoinProps } from 'constants/types/coin';
import { Coin } from 'components';
import { Logo } from 'assets/icons';

import * as S from './Header.styles';

export type HeaderProps = {
  items: CoinProps[];
  title?: string;
};

export const Header = ({ title = 'Mais lidas', items }: HeaderProps) => {
  return (
    <S.Wrapper>
      <Logo role="img" aria-label="logo" />
      <S.Content>
        <span>{title}</span>
        <S.CoinList>
          {items.map((item) => (
            <Coin key={item.id} {...item} />
          ))}
        </S.CoinList>
      </S.Content>
    </S.Wrapper>
  );
};
