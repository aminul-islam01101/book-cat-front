import moment from 'moment';

export type TYearMonth = {
  year: number;
  month: string;
};

export const convertYearMonth = (dateStr: string): TYearMonth => {
  const [year, month] = dateStr.split('-');
  const monthName = moment.months(parseInt(month) - 1);
  return { year: parseInt(year), month: monthName };
};
