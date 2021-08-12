import { CoinProps } from 'constants/types/coin';
import { Coin, Logo } from 'components';

import * as S from './Header.styles';

export type HeaderProps = {
  items: CoinProps[];
  title?: string;
};

export const Header = ({ title = 'Mais lidas', items }: HeaderProps) => {
  return (
    <S.Wrapper>
      <Logo />
      <S.Content>
        <span>{title}</span>
        <S.CoinList>
          {items.map((item) => (
            <Coin key={item.id} size="small" {...item} />
          ))}
        </S.CoinList>
      </S.Content>
    </S.Wrapper>
  );
};
