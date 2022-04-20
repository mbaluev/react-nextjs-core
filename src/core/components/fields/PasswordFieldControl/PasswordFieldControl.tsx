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

  if (loading) {
    return <SkeletonFieldControl className={cls} />;
  } else if (isEdit) {
    return <PasswordFieldControlEdit className={cls} {...other} />;
  } else {
    return <PasswordFieldControlView className={cls} {...other} />;
  }
};
