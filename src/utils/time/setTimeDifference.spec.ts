import { setTimeDifference } from './setTimeDifference';

describe('setTimeDifference()', () => {
  it('should return in days the time difference', () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    const nextDay = currentDate.toString();

    expect(setTimeDifference(nextDay)).toStrictEqual('1 dias atrás');
  });

  it('should return in hours the time difference', () => {
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() - 2);
    const twoHoursBehind = currentDate.toString();

    expect(setTimeDifference(twoHoursBehind)).toStrictEqual('2 horas atrás');
  });

  it('should return in minutes the time difference', () => {
    const currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() - 30);
    const thirtyMinutesBehind = currentDate.toString();

    expect(setTimeDifference(thirtyMinutesBehind)).toStrictEqual(
      '30 minutos atrás',
    );
  });
});
