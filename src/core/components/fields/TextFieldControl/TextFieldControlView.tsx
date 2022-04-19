import React from 'react';
import {classNames} from '@utils/classNames/classNames';
import {
  isTextFieldControlHasData,
  TextFieldControlProps,
} from '@components/fields';

export const TextFieldControlView = (props: TextFieldControlProps) => {
  const {className, value, viewFormat} = props;

  const cls = classNames(className, {
    'field-control_no-data': !isTextFieldControlHasData(value),
  });

  return isTextFieldControlHasData(value) ? (
    <div className={cls}>{viewFormat ? viewFormat(value) : value}</div>
  ) : (
    <div className={cls}>empty</div>
  );
};
