import { CoinProps } from 'constants/types/coin';
import { Coin } from 'components';

import * as S from './Header.styles';

type HeaderProps = {
  logo: string;
  items: CoinProps[];
};

export const Header = ({ logo, items }: HeaderProps) => {
  return (
    <S.Wrapper>
      <img src={logo} alt="logo" />
      <S.Content>
        {items.map((item) => (
          <Coin key={item.id} {...item} />
        ))}
      </S.Content>
    </S.Wrapper>
  );
};
