import { Box, Chip, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskHeader } from './interfaces/ITaskHeader';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

const TaskHeader: FC<ITaskHeader> = ({
  title,
  date,
}): ReactElement => {
  //const { title = 'Task Title', date = new Date() } = props;

  const formattedDate = format(date || new Date(), 'PPPP');

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
          label={formattedDate}
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
