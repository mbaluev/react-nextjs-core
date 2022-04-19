import React from 'react';
import {SwitchProps} from '@mui/material';
import {
  SwitchFieldControlView,
  SwitchFieldControlEdit,
  SkeletonFieldControl,
  BaseFieldControlProps,
  fieldControlClassNames,
} from '@components/fields';

export type SwitchFieldControlProps = SwitchProps &
  BaseFieldControlProps & {
    label?: string;
    value?: boolean;
    labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  };

export const SwitchFieldControl = (props: SwitchFieldControlProps) => {
  const {isEdit = true, loading, className, heightAuto, ...other} = props;

  const cls = fieldControlClassNames('switch-field-control', props);

  return loading ? (
    <SkeletonFieldControl className={cls} />
  ) : isEdit ? (
    <SwitchFieldControlEdit className={cls} {...other} />
  ) : (
    <SwitchFieldControlView className={cls} {...other} />
  );
};
