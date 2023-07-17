import React from 'react';
import Select, { SingleValue } from 'react-select';

import SelectStyles from '@/helpers/SelectStyles';
import { setPublicationYear } from '@/redux/features/filters/bookFilterSlice';
import { useAppDispatch } from '@/redux/hooks';

type TYearsProps = {
  years: { label: string; value: string }[];
};

const YearFilter: React.FC<TYearsProps> = ({ years }) => {
  const dispatch = useAppDispatch();
  const handleYearChange = (newValue: SingleValue<{ label: string; value: string }>) => {
    if (newValue && 'value' in newValue) {
      dispatch(setPublicationYear(newValue.value));
    }
  };
  return (
    <div>
      <div className="mt-1">
        <h3 className="text-sm">Time Zone</h3>
        <Select
          options={years}
          styles={SelectStyles}
          onChange={handleYearChange}
          placeholder="Select time zone"
          classNamePrefix="select2-selection"
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
        />
      </div>
    </div>
  );
};

export default YearFilter;
