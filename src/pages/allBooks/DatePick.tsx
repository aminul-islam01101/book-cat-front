import moment from 'moment';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date as Date)}
      dateFormat="MM/yyyy"
      showMonthYearPicker
    />
  );
};

export default DatePick;
