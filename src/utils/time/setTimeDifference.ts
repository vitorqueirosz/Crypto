import dayjs from 'dayjs';

dayjs().format();

export const setTimeDifference = (publishedAt: string) => {
  const publishedDate = dayjs(new Date(publishedAt)).format('YYYY-DD-MMTHH:mm');

  const hours = dayjs().diff(publishedDate, 'hour');
  const days = dayjs().diff(publishedDate, 'day');
  const minutes = dayjs().diff(publishedDate, 'minutes');

  return (
    (days && days + ' dias atrás') ||
    (hours && hours + ' horas atrás') ||
    (minutes && minutes + ' minutos atrás')
  );
};
