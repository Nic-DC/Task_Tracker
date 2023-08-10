import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import TaskHeader from './TaskHeader';
import TaskDescription from './TaskDescription';
import TaskFooter from './TaskFooter';
import { ITask } from './interfaces/ITask';
import { Status } from '../createTaskForms/enums/Status';
import { Priority } from '../createTaskForms/enums/Priority';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';

import PropTypes from 'prop-types';

const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = 'Title Task',
    date = new Date(),
    description = 'Describing the task',
    priority = Priority.low,
    status = Status.inProgress,
    onStatusChange = (e) => console.log(e.type),
    onClick = (e) => console.log(e.type),
  } = props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '9px',
        border: '3px solid',
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        onClick={onClick}
        onStatusChange={onStatusChange}
      />
    </Box>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  status: PropTypes.string,
  priority: PropTypes.string,
};
export default Task;
