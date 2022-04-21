import React from 'react';
import moment from 'moment';
import {isValid} from 'date-fns';
import {classNames} from '@utils/classNames/classNames';
import {DateFieldControlProps} from '@components/fields';

export const DateFieldControlView = (props: DateFieldControlProps) => {
  const {className, value, inputFormat = 'YYYY-DD-MM'} = props;

  let displayValue = '';
  if (value && isValid(value)) {
    displayValue = moment(value, [inputFormat, moment.ISO_8601]).format(
      inputFormat
    );
  } else if (value) {
    displayValue = 'Invalid Date';
  }

  const cls = classNames(className, {
    'field-control_no-data': !value || displayValue === 'Invalid Date',
  });

  return value ? (
    <div className={cls}>{displayValue}</div>
  ) : (
    <div className={cls}>empty</div>
  );
};
