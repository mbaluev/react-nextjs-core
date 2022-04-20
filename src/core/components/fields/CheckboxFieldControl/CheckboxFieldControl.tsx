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

  if (loading) {
    return <SkeletonFieldControl className={cls} />;
  } else if (isEdit) {
    return <CheckboxFieldControlEdit className={cls} {...other} />;
  } else {
    return <CheckboxFieldControlView className={cls} {...other} />;
  }
};
