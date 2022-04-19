import React from 'react';
import {TextFieldProps} from '@mui/material';
import {
  BaseFieldControlProps,
  fieldControlClassNames,
  PasswordFieldControlEdit,
  PasswordFieldControlView,
  SkeletonFieldControl,
} from '@components/fields';

export type PasswordFieldControlProps = TextFieldProps &
  BaseFieldControlProps & {
    value?: string;
  };

export const PasswordFieldControl = (props: PasswordFieldControlProps) => {
  const {isEdit = true, loading, className, heightAuto, ...other} = props;

  const cls = fieldControlClassNames('password-field-control', props);

  return loading ? (
    <SkeletonFieldControl className={cls} />
  ) : isEdit ? (
    <PasswordFieldControlEdit className={cls} {...other} />
  ) : (
    <PasswordFieldControlView className={cls} {...other} />
  );
};
