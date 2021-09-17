const coinPrefix = 'coin';

export const ROUTES = {
  HOME: '/',
  COIN_BY_ID: (id: string) => `${coinPrefix}/${id}`,
};
