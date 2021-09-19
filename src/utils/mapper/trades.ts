import { Trade } from 'components';
import dayjs from 'dayjs';

dayjs().format();

export const tradeMapper = (trades: Trade[]) => {
  const mappedTrades: Trade[] = trades.map((trade) => ({
    ...trade,
    time: dayjs(new Date(trade.time)).format('DD-MM-YYYY HH:mm'),
    price: parseFloat(trade.price).toString(),
  }));

  return mappedTrades;
};
