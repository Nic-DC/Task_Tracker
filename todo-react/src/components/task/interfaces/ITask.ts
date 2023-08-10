import { ITaskDescriptioin } from './ITaskDescriptioin';
import { ITaskFooter } from './ITaskFooter';
import { ITaskHeader } from './ITaskHeader';

export interface ITask
  extends ITaskHeader,
    ITaskDescriptioin,
    ITaskFooter {
  id?: string;
  priority?: string;
  status?: string;
}
