import React from 'react';
import {RadioGroupProps} from '@mui/material';
import {
  BaseFieldControlProps,
  fieldControlClassNames,
  RadioGroupFieldControlView,
  RadioGroupFieldControlEdit,
  SkeletonFieldControl,
} from '@components/fields';

export interface IRadioItem {
  value: string;
  label: string;
}

export type RadioGroupFieldControlProps = RadioGroupProps &
  BaseFieldControlProps & {
    items: IRadioItem[];
    value?: string;
    disabled?: boolean;
    layout?: 'vertical' | 'horizontal';
  };

export const RadioGroupFieldControl = (props: RadioGroupFieldControlProps) => {
  const {isEdit = true, loading, className, heightAuto, ...other} = props;

  const cls = fieldControlClassNames('radio-group-field-control', props);

  if (loading) {
    return <SkeletonFieldControl className={cls} />;
  } else if (isEdit) {
    return <RadioGroupFieldControlEdit className={cls} {...other} />;
  } else {
    return <RadioGroupFieldControlView className={cls} {...other} />;
  }
};
