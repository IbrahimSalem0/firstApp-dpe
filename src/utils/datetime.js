import { greetings } from './data';

export const getTimeOfDay = (datetime) => {
  const _dateTime = new Date(datetime || '');

  const hours = _dateTime.getHours();

  if (hours < 12) return greetings.morning;
  if (hours < 17) return greetings.afternoon;
  return greetings.night;
};
