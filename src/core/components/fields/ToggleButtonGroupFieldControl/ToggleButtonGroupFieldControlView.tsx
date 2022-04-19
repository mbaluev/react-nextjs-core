import React from 'react';
import {classNames} from '@utils/classNames/classNames';
import {
  isToggleButtonGroupFieldControlHasData,
  IToggleButtonItem,
  ToggleButtonGroupFieldControlProps,
} from '@components/fields';

export const ToggleButtonGroupFieldControlView = (
  props: ToggleButtonGroupFieldControlProps
) => {
  const {className, value, exclusive} = props;

  const cls = classNames(className, {
    'field-control_no-data': !isToggleButtonGroupFieldControlHasData(value),
  });

  const displayValue = (exclusive?: boolean) => {
    let ret;
    if (exclusive) {
      ret =
        props.items?.find((item: IToggleButtonItem) => {
          return item.value === value;
        })?.label || 'unknown';
    } else {
      ret =
        props.items
          ?.filter((item: IToggleButtonItem) => {
            return value.reduce((prev: boolean, cur: string) => {
              return prev || item.value === cur;
            }, false);
          })
          .map((item) => item.label)
          .join(', ') || 'unknown';
    }
    return ret;
  };

  return typeof value !== 'undefined' &&
    Array.isArray(value) &&
    (value as []).length > 0 ? (
    <div className={cls}>{displayValue(exclusive)}</div>
  ) : (
    <div className={cls}>empty</div>
  );
};
