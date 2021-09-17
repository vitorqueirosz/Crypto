import { ENUM_COIN_TYPE } from 'graphql/generated/globalTypes';
import { QueryCoins_coins_image } from 'graphql/generated/QueryCoins';
import { setDefaultImageUrl } from 'utils/setDefaultImageUrl';

export type StoredCoin = {
  id: string;
  title: string;
  short_description?: string;
  large_description?: string;
  publisher: string;
  publishedAt: string;
  image: Pick<QueryCoins_coins_image, 'url'> | null;
  type: ENUM_COIN_TYPE;
  viewed?: number;
};

export const coinMapper = (coin: StoredCoin[]) => {
  return coin.map((coin) => ({
    ...coin,
    image: setDefaultImageUrl(coin.image!.url),
  }));
};
