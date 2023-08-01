import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';

const TaskTitleField: FC<ITextField> = (props): ReactElement => {
  const { disabled = false, onChange = (e) => console.log(e.target.value)` } =
    props;

  return (
    <TextField
      id="title"
      label="Task Title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      disabled={false}
      onChange={(e) => console.log(e.target.value)}
    />
  );
};
export default TaskTitleField;
