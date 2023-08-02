import React, { FC, ReactElement } from 'react';
// import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {
  SelectChangeEvent,
} from '@mui/material/Select';
import { ISelectField } from './interfaces/ISelectField';

import PropTypes from 'prop-types';

const TaskSelectField: FC<ISelectField> = (
  props,
): ReactElement => {
  const {
    name = 'SelectBox',
    label = 'Select Box',
    disabled = false,
    value = '',
    items = [{ value: '', label: 'Add Items' }],
    onChange = (e: SelectChangeEvent) => console.log(e),
  } = props;

  return (
    <FormControl fullWidth>
      <InputLabel id={`${label}-id`}>{name}</InputLabel>
      <Select
        label={label}
        labelId={`${label}-id`}
        id={`${label}-id-select`}
        value={value as ''}
        disabled={disabled}
        onChange={onChange}
      >
        {items.map((item, index) => (
          <MenuItem
            key={item.value + index}
            value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

TaskSelectField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  // @ts-ignore
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default TaskSelectField;
