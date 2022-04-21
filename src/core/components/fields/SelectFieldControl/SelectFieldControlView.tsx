import React from 'react';
import {classNames} from '@utils/classNames/classNames';
import {findSelectItem, SelectFieldControlProps} from '@components/fields';

export const SelectFieldControlView = (props: SelectFieldControlProps) => {
  const {className, value, items} = props;

  const cls = classNames(className, {
    'field-control_no-data': !value || !findSelectItem(items, value),
  });

  const label = findSelectItem(items, value)?.label || 'empty';

  return value ? (
    <div className={cls}>{label}</div>
  ) : (
    <div className={cls}>empty</div>
  );
};
