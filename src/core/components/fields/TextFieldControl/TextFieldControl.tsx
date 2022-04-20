import React from 'react';
import {TextFieldProps} from '@mui/material';
import {
  BaseFieldControlProps,
  fieldControlClassNames,
  TextFieldControlEdit,
  TextFieldControlView,
  SkeletonFieldControl,
} from '@components/fields';

export type TextFieldControlProps = TextFieldProps &
  BaseFieldControlProps & {
    value?: string | number;
    regex?: RegExp;
    viewFormat?: (value?: string | number) => string | JSX.Element;
  };

export const isTextFieldControlHasData = (value?: string | number) => {
  return value || value === 0;
};

export const TextFieldControl = (props: TextFieldControlProps) => {
  const {isEdit = true, loading, viewFormat, multiline, className, heightAuto, ...other} = props;

  const cls = fieldControlClassNames('text-field-control', props);

  if (loading) {
    return <SkeletonFieldControl className={cls} />;
  } else if (isEdit) {
    return <TextFieldControlEdit className={cls} multiline={multiline} {...other} />;
  } else {
    return <TextFieldControlView className={cls} viewFormat={viewFormat} {...other} />;
  }
};
