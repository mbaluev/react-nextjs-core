import React from 'react';
import {SliderProps} from '@mui/material';
import {
  BaseFieldControlProps,
  fieldControlClassNames,
  SkeletonFieldControl,
  SliderFieldControlEdit,
  SliderFieldControlView,
} from '@components/fields';

export type SliderFieldControlProps = Omit<SliderProps, 'onChange'> &
  BaseFieldControlProps & {
    endAdornment?: JSX.Element | string;
    onChange?: (value?: number | number[]) => void;
    format?: string;
  };

export const SliderFieldControl = (props: SliderFieldControlProps) => {
  const {isEdit = true, loading, className, heightAuto, ...other} = props;

  const cls = fieldControlClassNames('slider-field-control', props);

  return loading ? (
    <SkeletonFieldControl className={cls} />
  ) : isEdit ? (
    <SliderFieldControlEdit className={cls} {...other} />
  ) : (
    <SliderFieldControlView className={cls} {...other} />
  );
};
