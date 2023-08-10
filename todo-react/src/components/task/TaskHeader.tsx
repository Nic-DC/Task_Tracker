import { Box, Chip, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskHeader } from './interfaces/ITaskHeader';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

const TaskHeader: FC<ITaskHeader> = (
  props,
): ReactElement => {
  const { title = 'Task Title', date = new Date() } = props;

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      mb={2}
    >
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip
          variant="outlined"
          label={format(date, 'PPPP')}
        ></Chip>
      </Box>
    </Box>
  );
};

TaskHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};
export default TaskHeader;
