import { StylesConfig } from 'react-select';

type OptionBase = {
  label: string;
  value: string;
};

type SelectStylesConfig<OptionType extends OptionBase> = StylesConfig<OptionType, false>;

const SelectStyles: SelectStylesConfig<OptionBase> = {
  option: (base, state) => ({
    ...base,
    width: '100%',
    backgroundColor: state.isSelected ? '#d6edf7' : 'white',
    color: state.isSelected ? 'white' : 'black',
    outline: 'none !important',
    boxShadow: 'rgba(192, 37, 37, 0.24) 0px 3px 8px;',
    ':hover': {
      backgroundColor: 'lightblue',
      borderColor: '#cccccc',
    },
  }),
  control: (base) => ({
    ...base,
    border: '1px solid #e5e7eb !important',
    ':hover': {
      outline: 'none !important',
      border: 'none',
    },
  }),
};

export default SelectStyles;
