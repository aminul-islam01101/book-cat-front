import moment from 'moment';

export const DDMMMYYYY = (date: string) => moment(date).format('DD MMM, YYYY');
