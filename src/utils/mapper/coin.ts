import { setDefaultImageUrl } from 'utils/setDefaultImageUrl';

// TODO remove later
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const coinMapper = (coin: any[]) => {
  return coin.map((coin) => ({
    ...coin,
    image: setDefaultImageUrl(coin.image.url),
  }));
};
