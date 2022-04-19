import React from 'react';
import numeral from 'numeral';
import {classNames} from '@utils/classNames/classNames';
import {SliderFieldControlProps} from '@components/fields';

export const getSliderDisplayViewValue = (
  value?: number | number[],
  format?: string
) => {
  const f = format || '0,0';
  return value
    ? Array.isArray(value)
      ? `${numeral(value[0]).format(f)} - ${numeral(value[1]).format(f)}`
      : numeral(value).format(f)
    : 'empty';
};

export const sliderFieldControlHasData = (
  value?: number | number[],
  min?: number,
  max?: number
) => {
  return (
    Boolean(value) &&
    Array.isArray(value) &&
    value[0] !== min &&
    value[1] !== max
  );
};

export const SliderFieldControlView = (props: SliderFieldControlProps) => {
  const {className, value, format, endAdornment, min = 0, max = 100} = props;

  const cls = classNames(className, {
    'field-control_no-data': !Boolean(sliderFieldControlHasData(value)),
  });

  return !value ||
    (Array.isArray(value) && value[0] === min && value[1] === max) ? (
    <div className={cls}>empty</div>
  ) : (
    <div className={cls}>
      {getSliderDisplayViewValue(value, format)} {endAdornment}
    </div>
  );
};
