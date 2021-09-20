import { Trade } from 'components';
import dayjs from 'dayjs';
import { formatDate } from 'utils/formatDate';

dayjs().format();

export const tradeMapper = (trades: Trade[]) => {
  const mappedTrades: Trade[] = trades.map((trade) => ({
    ...trade,
    time: formatDate(new Date(trade.time).toString()),
    price: parseFloat(trade.price).toString(),
  }));

  return mappedTrades;
};
