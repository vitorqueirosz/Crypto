import { Trade } from 'components';
import dayjs from 'dayjs';

dayjs().format();

export const tradeMapper = (trades: Trade[]) => {
  const mappedTrades: Trade[] = trades.map((trade) => ({
    ...trade,
    time: dayjs(new Date(trade.time)).format('YYYY-MM-DDTHH:mm'),
    price: parseFloat(trade.price).toString(),
    height: Number(trade.price),
  }));

  return mappedTrades;
};
