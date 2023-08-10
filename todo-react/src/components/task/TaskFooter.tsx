import {
  Box,
  Button,
  Switch,
  FormControlLabel,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskFooter } from './interfaces/ITaskFooter';

import PropTypes from 'prop-types';

const TaskFooter: FC<ITaskFooter> = (
  props,
): ReactElement => {
  const {
    onStatusChange = (e) => console.log(e.type),
    onClick = (e) => console.log(e.type),
  } = props;

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      mr={4}
    >
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            color="warning"
            onChange={(e) => onStatusChange(e)}
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: 'white' }}
        onClick={(e) => onClick(e)}
      >
        Mark Completed
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};
export default TaskFooter;
