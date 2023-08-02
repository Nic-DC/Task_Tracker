import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../createTaskForms/enums/Status';
import { emitCorrectBorderColor } from './helpers/emitCorrectBorderColors';
import { emitCorrectLabel } from './helpers/emitCorrectLabel';
import { TaskCounterStatusType } from './interfaces/ITaskCounter';
import PropTypes from 'prop-types';

const TaskCounter: FC<ITaskCounter> = (
  props,
): ReactElement => {
  const { count = 0, status = Status.todo } = props;

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            borderColor: `${emitCorrectBorderColor(
              status,
            )}`,
            width: '96px',
            height: '96px',
            marginBottom: '16px',
          }}
        >
          <Typography color="#ffffff" variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography
          color="#ffffff"
          variant="h5"
          fontSize="20px"
          fontWeight="bold"
        >
          {emitCorrectLabel(status)}
        </Typography>
      </Box>
    </>
  );
};
TaskCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([
    Status.todo,
    Status.inProgress,
    Status.completed,
  ]),
};

export default TaskCounter;
