import { QueryCoins_bitcoins_image } from 'graphql/generated/QueryCoins';
import { setDefaultImageUrl } from 'utils/setDefaultImageUrl';

export type StoredCoin = {
  id: string;
  title: string;
  details: string;
  image: Pick<QueryCoins_bitcoins_image, 'url'> | null;
  viewed?: number;
};

export const coinMapper = (coin: StoredCoin[]) => {
  return coin.map((coin) => ({
    ...coin,
    image: setDefaultImageUrl(coin.image!.url),
  }));
};
