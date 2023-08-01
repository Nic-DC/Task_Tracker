import React from 'react';
import { IDisabled } from './IDisabled';

export interface ITextField extends IDisabled {
  onChange?: (
    e: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}
