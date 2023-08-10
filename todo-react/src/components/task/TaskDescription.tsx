import { Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

import PropTypes from 'prop-types';
import { ITaskDescriptioin } from './interfaces/ITaskDescriptioin';

const TaskDescription: FC<ITaskDescriptioin> = (
  props,
): ReactElement => {
  const { description = 'Task description' } = props;

  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string,
};
export default TaskDescription;
