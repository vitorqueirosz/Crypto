import { CoinProps } from 'constants/types/coin';
import { Coin } from 'components';

import * as S from './Header.styles';

type HeaderProps = {
  logo: string;
  items: CoinProps[];
  title?: string;
};

export const Header = ({ logo, title, items }: HeaderProps) => {
  return (
    <S.Wrapper>
      <img src={logo} alt="logo" />
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
