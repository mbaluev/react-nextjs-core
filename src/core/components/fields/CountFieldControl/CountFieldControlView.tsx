import React from 'react';
import numeral from 'numeral';
import {classNames} from '@utils/classNames/classNames';
import {CountFieldControlProps} from '@components/fields';

export const getCountDisplayViewValue = (
  value?: number,
  format?: string,
  endAdornment?: string | JSX.Element
) => {
  const f = format || '0,0';
  let ret = 'empty';
  if (value) {
    ret = numeral(value).format(f);
    if (endAdornment) ret += ` ${endAdornment}`;
  }
  return ret;
};

export const CountFieldControlView = (props: CountFieldControlProps) => {
  const {className, value, format, endAdornment} = props;

  const cls = classNames(className, {'field-control_no-data': !Boolean(value)});

  return !value ? (
    <div className={cls}>empty</div>
  ) : (
    <div className={cls}>
      {getCountDisplayViewValue(value, format, endAdornment)}
    </div>
  );
};
