import React, { FC, ReactElement } from 'react';
import { Grid, Box } from '@mui/material';
import { format } from 'date-fns';
import TaskCounter from '../taskCounter/TaskCounter';
import Task from '../task/Task';

const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} p={4}>
      <Box mb={8} px={4}>
        <h2>
          Status of Your Tasks as of{' '}
          {format(new Date(), 'PPPP')}
        </h2>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
          {/* <Box>Task Counter 1</Box>
          <Box>Task Counter 2</Box>
          <Box>Task Counter 3</Box> */}
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          md={8}
          xs={10}
        >
          <Task />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default TaskArea;
