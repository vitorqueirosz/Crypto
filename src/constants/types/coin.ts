export type CoinProps = {
  id: string;
  title: string;
  short_description: string;
  publisher: string;
  publishedAt: string;
  image: string;
  size?: 'normal' | 'small';
};

export type Coins = 'bitcoin' | 'ethereum' | 'cardano' | 'others';
