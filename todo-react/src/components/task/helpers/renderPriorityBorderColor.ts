import { Priority } from '../../createTaskForms/enums/Priority';

export const renderPriorityBorderColor = (
  priority: string,
): string => {
  switch (priority) {
    case Priority.low:
      return 'info.light';
    case Priority.normal:
      return 'grey.900';
    case Priority.high:
      return 'err.light';
    default:
      return 'grey.900';
  }
};
