import dayjs from 'dayjs';

dayjs().format();

export const formatDate = (date: string): string => {
  return dayjs(date).format('DD-MM-YYYY HH:mm');
};
