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

import PropTypes from 'prop-types';

const TaskSelectField: FC = (): ReactElement => {
  //   const {
  //     disabled = false,
  //     value = new Date(),
  //     onChange = (date) => console.log(date),
  //   } = props;

  return (
    <FormControl fullWidth>
      <InputLabel id="status">Status</InputLabel>
      <Select
        label="Status"
        labelId="status"
        id="status-select"
        value=""

        // onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

TaskSelectField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.instanceOf(Date),
};

export default TaskSelectField;
