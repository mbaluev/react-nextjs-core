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

  if (isTextFieldControlHasData(value) && viewFormat) {
    return <div className={cls}>{viewFormat(value)}</div>;
  } else if (isTextFieldControlHasData(value)) {
    return <div className={cls}>{value}</div>;
  } else {
    return <div className={cls}>empty</div>;
  }
};
