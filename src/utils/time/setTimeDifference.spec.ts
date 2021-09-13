import dayjs from 'dayjs';
import { setTimeDifference } from './setTimeDifference';

dayjs().format();

describe('setTimeDifference()', () => {
  it('should return in days the time difference', () => {
    const currentDay = new Date();
    const pastDay = dayjs(currentDay.setDate(currentDay.getDate() - 1)).format(
      'YYYY-DD-MMTHH:mm',
    );

    expect(setTimeDifference(pastDay)).toStrictEqual('1 dias atrás');
  });

  it('should return in hours the time difference', () => {
    const currentDate = new Date();
    const twoHoursBehind = dayjs(
      currentDate.setHours(currentDate.getHours() - 2),
    ).format('YYYY-DD-MMTHH:mm');

    expect(setTimeDifference(twoHoursBehind)).toStrictEqual('2 horas atrás');
  });

  it('should return in minutes the time difference', () => {
    const currentDate = new Date();
    const thirtyMinutesBehind = dayjs(
      currentDate.setMinutes(currentDate.getMinutes() - 30),
    ).format('YYYY-DD-MMTHH:mm');

    expect(setTimeDifference(thirtyMinutesBehind)).toStrictEqual(
      '30 minutos atrás',
    );
  });
});
