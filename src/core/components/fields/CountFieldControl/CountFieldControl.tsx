import React from 'react';
import {SliderProps} from '@mui/material';
import {
  BaseFieldControlProps,
  fieldControlClassNames,
  CountFieldControlEdit,
  CountFieldControlView,
  SkeletonFieldControl,
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

  if (loading) {
    return <SkeletonFieldControl className={cls} />;
  } else if (isEdit) {
    return <CountFieldControlEdit className={cls} {...other} />;
  } else {
    return <CountFieldControlView className={cls} {...other} />;
  }
};
