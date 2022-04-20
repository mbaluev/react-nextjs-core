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

  if (loading) {
    return <SkeletonFieldControl className={cls} />;
  } else if (isEdit) {
    return <SliderFieldControlEdit className={cls} {...other} />;
  } else {
    return <SliderFieldControlView className={cls} {...other} />;
  }
};
