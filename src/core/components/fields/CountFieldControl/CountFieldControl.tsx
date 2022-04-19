import React from 'react';
import {SliderProps} from '@mui/material';
import {SkeletonFieldControl} from '@components/fields';
import {
  BaseFieldControlProps,
  fieldControlClassNames,
  CountFieldControlEdit,
  CountFieldControlView,
} from '@components/fields';

export type CountFieldControlProps = Omit<SliderProps, 'onChange' | 'value'> &
  BaseFieldControlProps & {
    value: number;
    endAdornment?: JSX.Element | string;
    onChange?: (value: number) => void;
    format?: string;
  };

export const CountFieldControl = (props: CountFieldControlProps) => {
  const {isEdit = true, loading, className, ...other} = props;

  const cls = fieldControlClassNames('count-field-control', props);

  return loading ? (
    <SkeletonFieldControl className={cls} />
  ) : isEdit ? (
    <CountFieldControlEdit className={cls} {...other} />
  ) : (
    <CountFieldControlView className={cls} {...other} />
  );
};
