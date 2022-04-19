import React from 'react';
import {CheckboxProps} from '@mui/material';
import {
  BaseFieldControlProps,
  fieldControlClassNames,
  CheckboxFieldControlView,
  CheckboxFieldControlEdit,
  SkeletonFieldControl,
} from '@components/fields';

export type CheckboxFieldControlProps = CheckboxProps &
  BaseFieldControlProps & {
    label?: string;
    value?: boolean;
  };

export const CheckboxFieldControl = (props: CheckboxFieldControlProps) => {
  const {isEdit = true, loading, className, heightAuto, ...other} = props;

  const cls = fieldControlClassNames('checkbox-field-control', props);

  return loading ? (
    <SkeletonFieldControl className={cls} />
  ) : isEdit ? (
    <CheckboxFieldControlEdit className={cls} {...other} />
  ) : (
    <CheckboxFieldControlView className={cls} {...other} />
  );
};
