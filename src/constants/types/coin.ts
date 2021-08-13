export type CoinProps = {
  id: string;
  title: string;
  details: string;
  image: string;
  size?: 'normal' | 'small';
};

export type Coins = 'bitcoin' | 'ethereum' | 'cardano' | 'others';
