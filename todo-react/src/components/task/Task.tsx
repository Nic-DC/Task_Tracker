import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import TaskHeader from './TaskHeader';
import TaskDescription from './TaskDescription';

const Task: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={2}
      p={4}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'err.light',
      }}
    >
      <TaskHeader />
      <TaskDescription />
    </Box>
  );
};
export default Task;
